import { prismaClient } from "@/lib/prisma"

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
    return ( <h1>{product.name}</h1> );
}
 
export default ProductDetailsPage;
