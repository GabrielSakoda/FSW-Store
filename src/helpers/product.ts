import { Product } from "@prisma/client";

interface ProductWithtotalPrice extends Product {
    totalPrice: number;
}

export const computeProducttotalPrice = (product: Product): ProductWithtotalPrice => {
    if (product.discountPercentage === 0) {
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        };
    }

    const totalPrice =
        Number(product.basePrice) * (product.discountPercentage / 100);
    return {
        ...product,
        totalPrice,
    };
};