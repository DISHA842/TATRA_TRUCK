import React from "react";

function Card({ name }) {
  return (
    <div class="p-4 sm:w-1/2 lg:w-1/5  md:1/3  gap-y-px ">
      <div class=" m-10 mx-auto  gap-y-10 gap-x-2  bg-blue-500 text-white p-5 h-48 w-52 space-y-5 border-2 p-3 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden flex flex-col items-center hover:bg-blue-300 transition duration-300 ease-in">
        <div class="pb-2 lg:h-30 md:h-28">
          <h1 class="text-justify text-2xl text-white hover:text-black font-semibold mb-1">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
