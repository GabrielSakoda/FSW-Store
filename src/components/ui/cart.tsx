import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const { products, subTotal, total, totalDiscount } = useContext(CartContext);

    const handleFinishPurchaseClick = async () => {
        const checkout = await createCheckout(products);

        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
        )

        stripe?.redirectToCheckout({
            sessionId: checkout.id,
        });
    };

    return ( 
        <div className="flex h-full flex-col gap-8">
            <Badge className="w-fit gap-1 border-2 border-primary px-3" variant="outline">
                <ShoppingCartIcon size={16}/>
                Carrinho
            </Badge>

            <div className="flex flex-col h-full gap-5 overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex h-full gap-8 flex-col">
                        {products.length > 0 ? (
                            products.map((product) => (
                            <CartItem 
                                key={product.id} 
                                product={computeProductTotalPrice(product as any) as any}
                                />
                            ))
                        ) : (
                            <p className="font-semibold opacity-60">Carrinho vazio.</p>
                        )}
                    </div>
                </ScrollArea>
            </div>

            {products.length > 0 && (
                            <div className="flex flex-col gap-3">
                            <Separator/>
            
                            <div className="flex items-center justify-between text-xs">
                                <p>SubTotal</p>
                                <p>R$ {subTotal.toFixed(2)}</p>
                            </div>
            
                            <Separator/>
            
                            <div className="flex items-center justify-between text-xs">
                                <p>Entrega</p>
                                <p>GRÁTIS</p>
                            </div>
            
                            <Separator/>
            
                            <div className="flex items-center justify-between text-xs">
                                <p>Descontos</p>
                                <p>- R$ {totalDiscount.toFixed(2)}</p>
                            </div>
            
                            <Separator/>
            
                            <div className="flex items-center justify-between text-sm font-bold">
                                <p>Total</p>
                                <p>R$ {total.toFixed(2)}</p>
                            </div>
            
                            <Button className="uppercase font-bold mt-7" onClick={handleFinishPurchaseClick}>Finalizar compra</Button>
                        </div>
            )}           
        </div>
     );
}
 
export default Cart;