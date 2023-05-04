import React from "react";
import LazyLoad from "react-lazy-load";

const CusineCards = ({ card }) => {
  return (
    <div className="relative mr-3 h-full w-full inline-block duration-500 overflow-hidden rounded-2xl cursor-pointer mt-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <LazyLoad height={400} width={400} threshold={0.95}>
        <img src={card.photo_url} className="h-full w-full object-cover" />
      </LazyLoad>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h2 className="text-white text-3xl font-bold uppercase">
          {card.title}
        </h2>
      </div>
    </div>
  );
};

export default CusineCards;
