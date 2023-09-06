"use client"
import Layout from "@/layout/Layout";
import useCategories from "@/hooks/useCategories";

export default function Home() {
  const { currentCategory } = useCategories()
  return (
    <Layout page={currentCategory?.name}>
      <h1 className="text-4xl font-black">{currentCategory.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido</p>
    </Layout>
  );
};



