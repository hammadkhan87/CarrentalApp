import React from "react";

const BookNowButton = ({ type }) => {
  return (
    <button
      className={`${
        type == 2 ? "bg-blue-300" : "bg-zinc-300"
      } text-zinc-800 py-300 px-5 rounded-full
        cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 transition-all duration-200 ease-out
        hover:text-zinc-200 clash-display py-1.5`}
    >
      Book Now
    </button>
  );
};

export default BookNowButton;
