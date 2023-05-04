import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const Explore = () => {
  return (
    <div className="my-container">
      <div className="title-body">
        <h2 className="title">Explore Celebrity Chefs</h2>
        <p className="para">
          Explore Global Cuisine & Celebrity Chefs' Recipes
        </p>
      </div>
      <div className="">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row h-full">
          {/* left side  */}
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 mt-4 lg:mt-8">
              <h2 className="lg:max-w-lg mb-6 font-sans lg:text-5xl font-bold tracking-tight text-4xl sm:text-4xl sm:leading-none text-center lg:text-left">
                We take care of your foodie life
              </h2>
              <p className="text-base text-gray-500 md:text-lg text-justify">
                Welcome to OnlyChef, your ultimate destination for exploring the
                world's best cuisine and discovering renowned celebrity chefs
                and their signature recipes. Whether you're an aspiring home
                cook or a seasoned culinary enthusiast, OnlyChef is your go-to
                source for mouth-watering dishes from all corners of the globe.
                Browse our extensive collection of recipes by country and
                uncover the secrets behind some of the world's most popular
                dishes. Plus, get up close and personal with the world's most
                acclaimed chefs, as they share their favorite recipes and
                cooking tips exclusively on OnlyChef. Join our community of
                foodies today and start cooking like a pro with OnlyChef.
              </p>
              <div className="my-6 w-1/2 mx-auto lg:w-fit lg:mx-0">
                <Link to="/register">
                  <button className="btn w-full">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
          {/* right side  */}
          {/* Lottie Animation */}
          <div className="lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto">
              <Player
                autoplay
                speed={1.5}
                loop
                src="/chef-dancing.json"
                className="rounded"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
