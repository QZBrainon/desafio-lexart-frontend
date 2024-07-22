import React from "react";
import { LuTrash2 } from "react-icons/lu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, brand, model, price, color, refresh }) {
  const navigate = useNavigate();
  const deleteItem = async (itemId) => {
    try {
      const jwt = localStorage.getItem("jwt");
      await axios.delete(
        `https://desafio-lexart-backend.vercel.app/products/${itemId}`,
        {
          headers: { Authorization: jwt },
        }
      );
      await refresh();
      navigate("/products");
    } catch (error) {
      console.error(error);
      navigate("/404");
    }
  };
  return (
    <>
      <div
        onClick={() => navigate(`/products/${id}`)}
        className="lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer"
        id={id}
      >
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {brand} - {model} - {color}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="mt-1">${price}</p>
            <LuTrash2
              onClick={() => deleteItem(id)}
              className="stroke-red-600 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
