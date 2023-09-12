"use client";
import { useEffect, useCallback } from "react";
import useCategories from "@/hooks/useCategories";
import Layout from "@/layout/Layout";
import { formatearDinero } from "@/helper";

export default function Order() {
  const { order, name, setName, total, submitOrder } = useCategories();

  const validateOrder = useCallback(() => {
    return order.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    validateOrder();
  }, [order, validateOrder]);

  return (
    <Layout page="Total">
      <h1 className="text-2xl md:text-4xl font-black dark:text-white">Total y confirmar pedido</h1>
      <p className="text-xl md:text-2xl my-10 dark:text-white">Confirma tu pedido</p>
      <div id="form">
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-md md:text-xl dark:text-white"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <>
          {order.length > 0 &&
            order.map((product) => (
              <div key={product.id} className="flex justify-between mt-5 dark:text-white">
                <p className="text-base md:text-xl">{product.name} x {product.count}</p>
                <p className="text-md md:text-2xl font-bold">
                  {formatearDinero(product.price * product.count)}
                </p>
              </div>
            ))}
        </>
        <div className="mt-10">
          <p className="text-2xl dark:text-white">
            Total a pagar{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="button"
            className={`${
              validateOrder()
                ? "bg-indigo-100 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            } w-full lg:w-auto px-5 py-2 uppercase rounded font-bold text-white transition-colors duration-500 text-center`}
            value="Confirmar pedido"
            disabled={validateOrder()}
            onClick={() => {
              submitOrder()
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
