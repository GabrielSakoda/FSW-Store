
import Image from "next/image"
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import Sectiontitle from "../../components/ui/section-tittle";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })
  return <div className="flex flex-col gap-8 py-8">
    <PromoBanner
      src="/banner-home-01.png"
      alt="Até 55% de desconto esse mês!"
    />

    <div className="px-5">
      <Categories/>
    </div>

    <div>
      <Sectiontitle>Ofertas</Sectiontitle>
      <ProductList products={deals}/>
    </div>

    <PromoBanner
      src="/banner-home-02.png"
      alt="Até 55% de desconto em mouses!"
    />

    <div>
      <Sectiontitle>Teclados</Sectiontitle>
      <ProductList products={keyboards}/>
    </div>

    <div>
    <PromoBanner
      src="/banner-home-03.png"
      alt="Até 55% de desconto em "
    />
    </div>

    <div>
      <Sectiontitle>Mouses</Sectiontitle>
      <ProductList products={mouses} />
    </div>

  </div>;
}
