"use client";
import Layout from "@/layout/Layout";
import useCategories from "@/hooks/useCategories";
import Image from "next/image";
import Product from "@/components/Product";

export default function Home() {
  const { currentCategory } = useCategories();
  return (
    <Layout page={currentCategory?.name}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
