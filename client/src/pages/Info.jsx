import { useEffect, useState } from "react";
import React from "react";
import PageTransition from "../components/PageTransition";
import Sypnosis from "../components/sypnosis/Sypnosis";
import gif from "../assets/Futurama.gif";

const Info = () => {
  const [synopsis, setSynopsis] = useState([]);
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <PageTransition>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={gif} alt="gif/loading" className="object-fill" />
        </div>
      ) : (
        <Sypnosis creators={creators} synopsis={synopsis} />
      )}
    </PageTransition>
  );
};

export default Info;
