import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EpisodeVideo = () => {
  const [videos, setVideos] = useState({});
  const { _id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get(
          `https://futurama.onrender.com/api/v1/getEpisode/${_id}`
        );
        setVideos(res.data.futurama);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [_id]);

  return (
    <div className="w-full flex flex-col justify-center textShadows h-[calc(100%-80px)]">
      <h1 className="text-white mt-4 w-full md:text-5xl text-2xl">
        Episode: {videos.title}
      </h1>
      <p className="text-3xl font-bold text-white">{videos.number}</p>
      <iframe
        loading="lazy"
        width="100%"
        height="100%"
        src={videos.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-square md:h-[580px] w-full"
      ></iframe>
      <div className="flex justify-center my-1">
        <Link
          to="/episode"
          className="flex bg-[#459ED3] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};

export default EpisodeVideo;
