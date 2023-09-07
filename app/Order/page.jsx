"use client";
import { useEffect, useCallback } from "react";
import useCategories from "@/hooks/useCategories";
import Layout from "@/layout/Layout";
import { formatearDinero } from "@/helper";

export default function Order() {
  const { order, name, setName, total } = useCategories();

  const validateOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 3
  }, [order, name]);

  useEffect(() => {
    validateOrder()
  }, [order, validateOrder]);

  const submitOrder = (e) => {
    e.preventDefault();
  };
  return (
    <Layout page="Total">
      <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido</p>
      <form
        autocomplete="off"
        onSubmit={() => {
          submitOrder();
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={e => setName(e.target.value)}
            autocomplete="off"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${validateOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 uppercase rounded font-bold text-white transition-colors duration-500 text-center cursor-pointer`}
            value="Confirmar pedido"
            disabled={validateOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
