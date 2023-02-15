import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "../components/characters/ListCard";
import PageTransition from "../components/PageTransition";
import Pagination from "../components/Pagination";
import gif from "../assets/Futurama.gif";

const ListCharacter = () => {
  const [spaces, setSpaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFuturama = async () => {
      const res = await axios.get(
        "https://futurama.onrender.com/api/v1/getCharacter",
        {
          params: {
            page: currentPage,
            per_page: postsPerPage,
          },
        }
      );
      setSpaces(res.data.characters);
      setTotalPages(res.data.totalPages);
      setIsLoading(false);
    };
    getFuturama();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = spaces.slice(firstPostIndex, lastPostIndex);

  return (
    <PageTransition>
      <Pagination
        totalPosts={spaces.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {isLoading ? (
        <div
          className="flex justify-center items-center w-full h-screen"
        >
          <img src={gif} alt="gif/loading" className="object-fill" />
        </div>
      ) : (
        <ListCard classname="h-full" spaces={currentPosts} />
      )}
    </PageTransition>
  );
};

export default ListCharacter;
