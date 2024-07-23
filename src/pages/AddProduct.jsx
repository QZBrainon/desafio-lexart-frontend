import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    price: "",
    color: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const jwt = localStorage.getItem("jwt");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await axios.post(
        "https://desafio-lexart-backend.vercel.app/products",
        formData,
        {
          headers: { Authorization: jwt },
        }
      );
      if (response.status === 201) {
        setSuccess("Product created successfully!");
        setFormData({
          name: "",
          brand: "",
          model: "",
          price: "",
          color: "",
        });
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
        <div className="text-center my-6">
          <h1 className="text-3xl font-semibold text-gray-700">
            Create product
          </h1>
          <p className="text-gray-500">Register new products</p>
        </div>
        <div className="m-6">
          <form className="mb-4">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Product name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="Product's brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="model"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Model
              </label>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Product's model line"
                value={formData.model}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Product's price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="color"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Color
              </label>
              <input
                type="text"
                name="color"
                id="color"
                placeholder="Product's color"
                value={formData.color}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="button"
                onClick={handleForm}
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
              >
                Create product
              </button>
              <button
                type="button"
                onClick={() => navigate("/products")}
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out mt-4 flex items-center justify-center gap-2"
              >
                <ArrowLeftCircle />
                <p>Back to products</p>
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-emerald-500">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
