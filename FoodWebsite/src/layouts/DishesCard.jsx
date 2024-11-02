import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-64 p-5 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img 
        className="w-full h-48 object-cover rounded-lg mb-5" 
        src={props.img} 
        alt={props.title} 
      />
      
      <div className="text-center space-y-4">
        <h3 className="font-semibold text-xl text-gray-800">{props.title}</h3>
        
        <div className="flex justify-center space-x-1 text-brightColor">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
