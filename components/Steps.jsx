"use client"
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import useCategories from "@/hooks/useCategories";

const steps = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Resumen", url: "/Summary" },
  { step: 3, name: "Datos y total", url: "/Order" },
];

const Steps = () => {
  const { handleChangeStep } = useCategories();
  const router = useRouter();
  const pathname = usePathname();

  const progress = () => {
    let value;
    if (pathname === "/") {
      value = 2;
    } else if (pathname === "/Summary") {
      value = 50;
    } else if (pathname === "/Order") {
      value = 100;
    }
    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((item) => (
          <Link
            href={item.url}
            className="text-2xl font-bold"
            key={item.step}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${progress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
