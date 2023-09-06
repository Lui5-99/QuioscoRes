"use client";
import Image from "next/image";
import logo from "@/public/assets/img/logo.svg";
import useCategories from "@/hooks/useCategories";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useCategories();
  return (
    <>
      <div className="flex justify-center">
        <Image width={150} height={100} src={logo} alt="Logo" />
      </div>
      <nav className="mt-10">
        <ul>
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
