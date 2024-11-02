import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border border-gray-200 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      
      {/* Review Text */}
      <div className="mb-5 text-gray-600 text-sm leading-relaxed">
        <p className="text-justify">
          {props.reviewText || "Deliciously authentic! MirathChatkharay brings street food flavors with a touch of class. The hygiene and quality standards make all the difference—my favorite spot for gol gappas and channa chaat!"}
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="flex items-center mt-6 space-x-4">
        <img
          className="w-16 h-16 rounded-full object-cover shadow-md border border-gray-300"
          src={props.img || "https://via.placeholder.com/150"}
          alt={`${props.name}'s avatar`}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{props.name || "Anonymous"}</h3>
          <p className="text-sm text-gray-500">{props.role || "Customer"}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
