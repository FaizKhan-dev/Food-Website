import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Gol Gappa" price="Rs.150" />
        <DishesCard img={menu2} title="Dahi Baray" price="Rs.130" />
        <DishesCard img={menu3} title="Long Chiray" price="Rs.130" />
      </div>
    </div>
  );
};

export default Menu;