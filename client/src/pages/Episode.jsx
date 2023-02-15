import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import VideoCard from "../components/episodes/VideoCard";
import gif from "../assets/Futurama.gif";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      const res = await axios.get(
        "https://futurama.onrender.com/api/v1//getEpisode"
      );
      setEpisodes(res.data.episodes);
      setIsLoading(false);
    };

    getCast();
  }, []);

  return (
    <PageTransition>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={gif} alt="gif/loading" className="object-fill" />
        </div>
      ) : (
        <VideoCard episodes={episodes} key={episodes._id} />
      )}
    </PageTransition>
  );
};

export default Episode;
