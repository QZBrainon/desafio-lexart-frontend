import React from "react";
import phoneImage from "../assets/mobile-phone-hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The most stacked mobile phones ever
            <br class="hidden lg:inline-block" />
            now available to you!
          </h1>
          <p class="mb-8 leading-relaxed">
            Explore a world where tradition meets innovation. From classic
            designs to cutting-edge technology, our collection celebrates the
            essence of mobile evolution. Join us and experience a journey where
            every detail, from the ergonomic design to the latest features,
            reflects our commitment to quality and creativity.
          </p>
          <div class="flex justify-center">
            <Link
              to="/sign-in"
              class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={phoneImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
