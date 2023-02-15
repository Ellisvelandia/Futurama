import React from "react";

const Sypnosis = ({ synopsis, creators }) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center textShadows mt-2">
        {synopsis.map((data) => (
          <div
            key={data._id}
            className="w-full flex flex-col justify-center items-center mx-4 text-white font-black text-xl py-4"
          >
            <h1 className="text-white font-black md:text-8xl sm:text-7xl text-5xl text-center w-full p-2">
              {data.title}
            </h1>

            <p className="flex flex-col w-full mx-auto my-4 md:p-2">
              <span className="sm:text-2xl text-xl lg:text-center sm:text-justify text-center px-4">
                {data.desc}
              </span>
            </p>
            <img
              src={data.poster}
              alt={data._id}
              className="mt-4 px-2 lg:w-1/2 rounded-3xl aspect-square h-screen -mb-20"
              loading="lazy"
            />
            <span className="my-2 p-2 sm:text-2xl text-xl">
              firstEpisodeDate: {data.firstEpisodeDate}
            </span>
          </div>
        ))}

        <hr className="mt-4" />
        <span className="p-4 sm:text-5xl text-4xl font-black text-white">
          creators
        </span>
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
              <p className="sm:text-justify text-center h-full max-w-4xl">
                {creator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sypnosis;
