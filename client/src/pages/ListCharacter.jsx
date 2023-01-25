import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import PageTransition from "../components/PageTransition";
import Pagination from "../components/Pagination";

const ListCharacter = () => {
  const [spaces, setSpaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

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
      <ListCard classname="h-full bg-body" spaces={currentPosts} />
    </PageTransition>
  );
};

export default ListCharacter;
