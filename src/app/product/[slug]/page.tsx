import { prismaClient } from "@/lib/prisma"
import ProductImages from "./components/product-images";

interface ProductdetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}}: ProductdetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
    });
    
    if (!product) return null;

    return <div>
        <ProductImages imageUrls={product.imageUrls} name={product.name}/>
    </div>
}
 
export default ProductDetailsPage;