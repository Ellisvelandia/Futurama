import { useEffect, useState } from "react";
import React from "react";
import PageTransition from "../components/PageTransition";

const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://futurama.onrender.com/api/v1/getSypnosis"
      );
      const data = await res.json();
      setInfo(data.sypnosis);
      console.log(data.sypnosis);
    };

    getData();
  }, []);
  return (
    <PageTransition>
      <div>
        {info.map((data) => (
            <div
              key={data._id}
              className="w-full flex flex-col justify-center items-center m-4 text-white font-black text-xl"
            >
              <h1>
                <span className="text-white font-black md:text-7xl text-5xl text-center ">
                  {data.title}
                </span>
              </h1>
              <img
                src={data.poster}
                alt={data._id}
                className="md:-mt-6 md:-mb-8 my-4  max-w-7xl px-2 md:px-20 md:pt-20 lg:h-[450px] rounded-3xl"
                loading="lazy"
              />
              <p className="md:object-fill object-contain md:-mt-6 md:-mb-8 my-4 px-2 md:p-20 w-full text-justify text-2xl -h-56">
                {data.desc}
              </p>
                <div className="flex items-center justify-center md:px-20 mb-2 shadow-2xl hover:bg-[#459ED3]">
                  <div className="m-4 flex flex-col text-2xl items-center font-black h-full mt-8 w-full justify-center">
                    <span className="underline">{data.name}</span>
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-96 my-4 rounded-[50%] shadow-2xl bg-[#E6EFF8]"
                      loading="lazy"
                    />
                    <p className="text-justify h-full">{data.description}</p>
                  </div>
              </div>
            </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Info;
