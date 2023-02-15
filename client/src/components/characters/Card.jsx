import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const widthAnimation = {
  initial: { width: 0.8 },
  animate: { width: "100%" },
  exit: { width: "100%", x: window.innerWidth },
};

const Card = () => {
  const { _id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await fetch(
          `https://futurama.onrender.com/api/v1/getCharacter/${_id}`
        );
        const data = await res.json();
        setCharacter(data.character);
      } catch (err) {
        console.log(err);
      }
    };
    getCharacter();
  }, [_id]);

  return (
    <>
      <motion.section
        transition={{ ease: "easeInOut", duration: 0.1 }}
        variants={widthAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid place-content-center without media textShadows"
      >
        <div className="grid xl:w-[1100px] grid-cols-1 h-full md:grid-cols-2 place-items-center md:px-8 px-0 shadowbox textShadows rounded m-4 hover:bg-[#459ED3]">
          <div className="w-full flex h-[400px] justify-center mt-4">
            <motion.img
              src={character.image}
              alt={character.Name}
              className="rounded-lg md:h-[400px] sm:w-[300px] w-[calc(100%+300px)] object-fill"
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: 0 }}
            />
          </div>
          <div className="sm:mx-0 m-4">
            <h1 className=" text-2xl font-bold text-white my-1 md:mb-8 md:text-4xl w-full">
              {character.Name}
            </h1>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-3xl leading-loose md:leading-relaxed">
              Age: {character.Age}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-3xl leading-loose md:leading-relaxed">
              Species: {character.Species}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-3xl leading-loose md:leading-relaxed">
              Homeplanet: {character.Planet || "unknown"}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-3xl leading-loose md:leading-relaxed">
              Occupation: {character.Profession || "unknown"}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-3xl leading-loose md:leading-relaxed">
              Voicedby: {character.Voicedby || "unknown"}
            </p>
          </div>
          <Link
            to="/list"
            className="flex bg-[#459ED3] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
          >
            &larr; Back
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default Card;
