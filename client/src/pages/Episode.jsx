import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import VideoCard from "../components/VideoCard";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const res = await axios.get(
        "https://futurama.onrender.com/api/v1//getEpisode"
      );
      setEpisodes(res.data.episodes)
    };

    getCast();
  }, []);

  return (
    <PageTransition>
      <VideoCard episodes={episodes} key={episodes._id} />
    </PageTransition>
  );
};

export default Episode;
