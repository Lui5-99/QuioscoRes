import { formatearDinero } from "@/helper";
import Image from "next/image";
import axios from "axios"

const Order = ({ order: obj }) => {
  const { id, name, total, order, status } = obj;

	const terminarOrden = async () => {
    try{
      const date = new Date().toLocaleDateString('en-GB')
      const data = { id, name, total, date, order, status: true }
      console.log(JSON.stringify(data))
      await axios.put(`/api/orders/${id}`, JSON.stringify(data))
    }catch(error){
      console.log(error)
    }
	}

  return (
    <div className="border dark:border-zinc-600 p-10 space-y-5">
      <h3 className="text-xl md:text-2xl font-bold">Orden: {id}</h3>
      <p className="text-md md:text-lg my-10">Cliente: {name}</p>
      <div className="">
        {order.map((o) => (
          <div
            key={o.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${o.image}.jpg`}
                alt={`Image ${o.image}`}
              />
            </div>
            <div className="p-5 space-y-5">
                <h4 className="text-xl md:text-4xl font-bold text-amber-500">{o.name}</h4>
                <p className="text-lg md:text-2xl font-bold">Cantidad: {o.count}</p>
            </div>
          </div>
        ))}
      </div>
			<div className="md:flex md:items-center md:justify-between my-10">
				<p className="mt-5 text-2xl md:text-4xl font-sembold text-amber-500">Total a pagar: <span className="font-black">{formatearDinero(total)}</span></p>
				<button className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg" type="button" onClick={() => {terminarOrden()}}>Terminar Orden</button>
			</div>
    </div>
  );
};

export default Order;
