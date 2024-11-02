import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-5 py-10">
      <img 
        src={img} 
        alt="img" 
        className="w-full h-auto lg:max-w-md object-cover rounded-md shadow-lg"
      />

      <div className="space-y-6 lg:space-y-8 lg:pt-14 text-center lg:text-left">
        <h1 className="font-semibold text-3xl md:text-4xl text-center lg:text-start">
          Why Choose Us?
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-lg">
        Welcome to MirathChatkharay, where we bring you authentic flavors from the heart of traditional street food,
         with a commitment to quality and wellness. As the original brand for fresh and flavorful delicacies like gol gappas, channa chaat, dahi baray, and so much more, we pride ourselves on being the go-to spot for food lovers who care about taste and health alike.


        </p>
        <p className="text-gray-700 leading-relaxed max-w-lg">
        Choose MirathChatkharay for an unforgettable taste journey that’s both genuine and mindful of your health. Rediscover street food, the way it’s meant to be enjoyed!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
