import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import PageTransition from "../components/PageTransition";

const ListCharacter = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const getFuturama = async () => {
      const res = await axios.get(
        "https://futurama.onrender.com/api/v1/getCharacter"
      );
      setSpaces(res.data.characters);
    };
    getFuturama();
  }, []);

  return (
    <PageTransition>
      <ListCard spaces={spaces} />
    </PageTransition>
  );
};

export default ListCharacter;
