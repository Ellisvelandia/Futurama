import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ spaces }) => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 w-full gap-4 p-4 place-items-center bg-body textShadows">
        {spaces.map((space) => (
          <Link
            to={`/card/${space._id}`}
            key={space._id}
            className="rounded my-2 p-4 w-full h-full cursor-pointer flex-col justify-center items-center active:scale-90 hover:bg-[#459ED3] shadowbox"
          >
            <h2 className="text-white text-xl font-black my-2">{space.Name}</h2>
            <img
              src={space.image}
              alt={space._id}
              className="w-60 h-60 mx-auto"
              loading="lazy"
            />
            <p className="text-gray-100 md:my-1 font-black -my-2 text-lg md:text-xl leading-loose md:leading-relaxed">
              Status: {space.Status}
            </p>
            <p className="text-gray-100 md:my-1 font-black -my-2 text-lg md:text-xl leading-loose md:leading-relaxed">
              Firstappearance: {space.Firstappearance}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListCard;
