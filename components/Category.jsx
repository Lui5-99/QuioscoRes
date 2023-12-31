import Image from "next/image";
import useCategories from "@/hooks/useCategories";

const Category = ({ category }) => {
  const { id, name, icon } = category;
  const { currentCategory, handleClickCategory } = useCategories();
  return (
    <div
      className={`${
        currentCategory?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border dark:border-zinc-600 p-5 hover:bg-amber-400 trasition-all duration-500`}
      onClick={() => handleClickCategory(id)}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt={`Image ${icon}`}
        className="mr-5"
      />
      <button type="button" className="text-[#ffffff00] dark:text-[#ffffff00] md:text-2xl md:font-bold dark:md:text-white md:text-black">
        {name}
      </button>
    </div>
  );
};

export default Category;
