import Image from "next/image";
import { formatearDinero } from "@/helper";
import useCategories from "@/hooks/useCategories";

const Product = ({ product }) => {
  const { id, name, price, image } = product;
  const { handleSetProduct, handleChangeModal } = useCategories();
  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt={`Image ${image}`}
      />
      <div className="p-5">
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(price)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase rounded font-bold transition-colors duration-700"
          onClick={() => {
            handleSetProduct(product);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
