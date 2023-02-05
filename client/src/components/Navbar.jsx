import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/bender.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 0) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <nav
      className={
        !navState
          ? "sticky top-0 w-full h-20 flex items-center sm:px-0 px-8 py-2 shadow-md z-10 mx-auto"
          : "sticky top-0 w-full h-20 flex items-center sm:px-0 px-8 py-2 z-10 shadow-md mx-auto blur-effect-dark"
      }
    >
      <div className="flex justify-start w-full 2xl:visible">
        <img
          src={logo}
          alt="app logo"
          className="md:w-[150px] w-full h-28 md:p-4 invisible md:visible"
        />
      </div>
      <ul className="flex justify-end items-center w-full md:p-8 font-black text-white capitalize text-xl invisible md:visible drop-shadow-lg shadow-black">
        <motion.li whileHover={{ scale: 1.1 }} className="md:mx-2">
          <Link to="/" className="hover:text-[#225370]">
            Home
          </Link>
        </motion.li>
        <motion.li className="md:mx-2" whileHover={{ scale: 1.1 }}>
          <Link to="/info" className="hover:text-[#225370]">
            synopsis
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="md:mx-2">
          <Link to="/list" className="hover:text-[#225370]">
            Characters
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="md:mx-2">
          <Link to="/episode" className="hover:text-[#225370]">
            Episodes
          </Link>
        </motion.li>
      </ul>
      <div className="md:hidden">
        <img
          src={logo}
          alt="logo"
          className="absolute left-0 top-0 w-24 h-20"
        />
        <GiHamburgerMenu
          color="#fff"
          fontSize={30}
          className="cursor-pointer mx-auto"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div
            className={
              !navState
                ? "menu w-full h-full blur-effect-dark"
                : `${toggleMenu} absolute -top-80 left-0 right-0 w-full h-[calc(100%+80rem)] blur-effect-dark`
            }
            onClick={() => setToggleMenu(false)}
          >
            <ul className="font-black text-white capitalize text-3xl menu py-4">
              <img
                src="http://theinfosphere.org/images/4/40/Planet_Express_Logo.png"
                alt="logoexpress"
                className="h-28 w-full flex items-center justify-center"
                loading="lazy"
              />
              <li className="mx-2">
                <Link to="/" className="hover:text-[#225370] cursor-pointer">
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/info"
                  className="hover:text-[#225370] cursor-pointer"
                >
                  synopsis
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/list"
                  className="hover:text-[#225370] cursor-pointer"
                >
                  Characters
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/episode"
                  className="hover:text-[#225370] cursor-pointer"
                >
                  Episodes
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
