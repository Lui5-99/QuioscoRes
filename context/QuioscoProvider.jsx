"use client";
import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({})
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
    setCurrentCategory(categories[0])
  }, [categories])
  const handleClickCategory = id => {
    const category = categories.filter(cat => cat.id === id)
    setCurrentCategory(category[0])
  }
  return (
    <QuioscoContext.Provider value={{categories, currentCategory, handleClickCategory
    }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext
