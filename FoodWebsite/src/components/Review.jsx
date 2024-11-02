import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img4.jpg";

const Review = () => {
  const reviews = [
    {
      img: img1,
      name: "Gull-e-Rana",
      role: "Artist",
      reviewText: "MirathChatkharay brings an authentic taste with unmatched hygiene. It's my favorite spot for street food, and I always leave satisfied!",
    },
    {
      img: img2,
      name: "Nigah Mohammad",
      role: "Street Food Lover",
      reviewText: "The flavors are spot on! It's hard to find such quality and cleanliness in street food. MirathChatkharay sets a new standard.",
    },
    {
      img: img3,
      name: "Imran Ali",
      role: "Customer",
      reviewText: "Absolutely love their gol gappas and channa chaat! A perfect blend of taste and quality. Highly recommended for food lovers!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 bg-gray-100">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10 text-gray-800">
        Customer Reviews
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5 md:gap-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            img={review.img}
            name={review.name}
            role={review.role}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
