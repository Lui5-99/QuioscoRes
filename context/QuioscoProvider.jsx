"use client";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('')
  const [total, setTotal] = useState('')

  const router = useRouter()

  const getCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);
  useEffect(() => {
    const newTotal = order.reduce((total, product) => (product.price * product.count) + total, 0)
    setTotal(newTotal)
  }, [order])
  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push('/')
  };
  const handleSetProduct = (product) => {
    setProduct(product);
  };
  const handleChangeModal = () => {
    setModal(!modal);
  };
  const handleEditcount = id => {
    const newProduct = order.filter(product => product.id === id)
    setModal(!modal)
    setProduct(newProduct[0])
  }
  const handleDeleteProduct = id => {
    const removeProduct = order.filter(product => product.id !== id)
    setOrder(removeProduct)
  }
  const handleOrder = ({categoryId, ...product}) => {
    if(order.some(state => state.id === product.id)){
      const orderUpdate = order.map(state => state.id === product.id ? product : state)
      setOrder(orderUpdate)
      toast.success('Guardado correctamente')
    }
    else{
      setOrder([...order, product])
      toast.success('Agregado al pedido')
    }
    setModal(false)
  }
  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleOrder,
        order,
        handleEditcount,
        handleDeleteProduct,
        name,
        setName,
        total
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
