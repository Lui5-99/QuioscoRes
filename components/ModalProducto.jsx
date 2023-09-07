"use client"
import { useState, useEffect } from "react";
import { formatearDinero } from "@/helper";
import Image from "next/image";
import useCategories from "@/hooks/useCategories";

const ModalProducto = () => {
  const { product, handleChangeModal, handleOrder, order } = useCategories();
  const { id, name, price, image } = product;
  const [count, setCount] = useState(1);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (order.some((state) => state.id === product.id)) {
      const productoEdit = order.find((state) => state.id === product.id);
      setEdit(true);
      setCount(productoEdit.count);
    }
  }, [product, order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${image}.jpg`}
          alt={`Image ${image}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              handleChangeModal();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{count}</p>
          <button
            type="button"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase transition-colors duration-700 rounded"
          type="button"
          onClick={() => {
            handleOrder({ ...product, count });
          }}
        >
          {edit ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
