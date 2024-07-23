import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const jwt = localStorage.getItem("jwt");
      const response = await axios.get(
        "https://desafio-lexart-backend.vercel.app/products",
        { headers: { Authorization: `${jwt}` } }
      );
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products?.map((product) => (
              <ProductCard {...product} key={product.id} refresh={fetchData} />
            ))}
          </div>
          <button
            onClick={() => navigate("/add")}
            type="button"
            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out block text-center"
          >
            Add new product
          </button>
        </div>
      </section>
    </>
  );
}

export default Products;
