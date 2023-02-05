import React from "react";
import {
  Route,
  Routes,
  useLocation,
  BrowserRouter,
  Link,
  NavLink,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import {
  Card,
  Episode,
  EpisodeVideo,
  Home,
  Info,
  ListCharacter,
} from "./pages";
import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/list" element={<ListCharacter />}></Route>
          <Route path="/card/:_id" element={<Card />}></Route>
          <Route path="/episode" element={<Episode />}></Route>
          <Route path="/episodevideo/:_id" element={<EpisodeVideo />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
