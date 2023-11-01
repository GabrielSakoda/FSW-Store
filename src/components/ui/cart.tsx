import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
    const { products } = useContext(CartContext);
    return ( 
        <div className="flex flex-col gap-8">
            <Badge className="w-fit gap-1 border-2 border-primary px-3" variant="outline">
                <ShoppingCartIcon size={16}/>
            </Badge>

            <div className="flex flex-col gap-5">
                {products.map((product) => (
                    <CartItem key={product.id} product={computeProductTotalPrice(product as any) as any}/>
                ))}
            </div>
        </div>
     );
}
 
export default Cart;