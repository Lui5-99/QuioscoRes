"use client"
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import useSWR from "swr";
import Order from "@/components/Order";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Admin() {
  
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100})

  return (
    <AdminLayout page={"Admin"}>
      <h1 className="text-2xl md:text-4xl font-black">
        Panel de administración
      </h1>
      <p className="text-xl md:text-2xl my-10">Administra las ordenes</p>
      {data && data.length ? data.map(order => (
        <Order key={order.id} order={order}/>
      )) : (
        <p className="text-xl md:text-2xl">No hay ordenes pendientes</p>
      ) }
    </AdminLayout>
  );
}
