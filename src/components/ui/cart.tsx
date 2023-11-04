import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
    const { products, subTotal, total, totalDiscount } = useContext(CartContext);
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

                <Button className="uppercase font-bold mt-7">Finalizar compra</Button>
            </div>
        </div>
     );
}
 
export default Cart;