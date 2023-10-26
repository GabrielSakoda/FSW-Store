import { Category } from "@prisma/client";
import { Link } from "lucide-react";
import Image from "next/image"

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category }: CategoryItemProps) => {
    return ( 
        <Link href={`/category/${category.slug}`}>
            <div className="flex flex-col">
                <div className="bg-category-item-gradient w-full h-[150px] flex items-center justify-center rounded-tl-lg rounded-tr-lg">
                    <Image
                        src={category.imageUrl}
                        alt={category.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>

                <div className="bg-accent py-3 rouned-br-lg roundend-bl-lg">
                    <p className="text-center text-sm font-semibold">{category.name}</p>
                </div>
            </div>
        </Link>

    );
}

export default CategoryItem