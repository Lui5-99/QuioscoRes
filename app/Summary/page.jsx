"use client";
import Layout from "@/layout/Layout";
import SummaryProduct from "@/components/SummaryProduct";
import useCategories from "@/hooks/useCategories";

export default function Summary() {
  const { order } = useCategories();
  return (
    <Layout page="Resumen">
      <h1 className="text-2xl md:text-4xl font-black dark:text-white">Resumen</h1>
      <p className="text-xl md:text-2xl my-10 dark:text-white">Revisa tu pedido</p>
      {order.length === 0 ? (
        <p className="text-center text-xl md:text-2xl dark:text-white">No hay elementos en tu pedido</p>
      ) : (
        order.map(product => (
            <SummaryProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
