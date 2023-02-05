import { useEffect, useState } from "react";
import React from "react";
import PageTransition from "../components/PageTransition";

const Info = () => {
  const [synopsis, setSynopsis] = useState([]);
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res1 = await fetch(
          "https://futurama.onrender.com/api/v1/getSypnosis"
        );
        const data1 = await res1.json();
        setSynopsis(data1.sypnosis);
        const res2 = await fetch(
          "https://futurama.onrender.com/api/v1/getCreator"
        );
        const data2 = await res2.json();
        setCreators(data2.creator);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <PageTransition>
      <div className="w-full flex flex-col justify-center items-center textShadows mt-2">
        {synopsis.map((data) => (
          <div
            key={data._id}
            className="w-full flex flex-col justify-center items-center mx-4 text-white font-black text-xl py-4"
          >
            <h1 className="text-white font-black md:text-8xl text-7xl text-center w-full p-2">
              {data.title}
            </h1>

            <p className="flex flex-col w-full mx-auto my-4 md:p-2">
              <span className="text-2xl lg:text-center text-justify px-4">
                {data.desc}
              </span>
            </p>
            <img
              src={data.poster}
              alt={data._id}
              className="mt-4 px-2 lg:w-1/2 rounded-3xl aspect-square h-screen -mb-20"
              loading="lazy"
            />
            <span className="my-2 p-2 text-2xl">
              firstEpisodeDate: {data.firstEpisodeDate}
            </span>
          </div>
        ))}

        <hr className="mt-4" />
        <span className="p-4 text-5xl font-black text-white">creators</span>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 place-content-center w-full m-4 p-4 h-full">
          {creators.map((creator) => (
            <div
              key={creator._id}
              className="shadowbox rounded flex flex-col justify-center items-center text-white font-black text-xl p-4 hover:bg-[#459ED3]"
            >
              <span className="underline">{creator.name}</span>
              <img
                src={creator.image}
                alt={creator.name}
                className="w-96 my-4 rounded-[50%] shadow-2xl bg-[#E6EFF8]"
                loading="lazy"
              />
              <p className="text-justify h-full max-w-4xl">
                {creator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Info;
