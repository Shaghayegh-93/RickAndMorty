import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { Character } from "./CharacterList";

const Navbar = ({
  numOfList,
  serach,
  setSearch,
  numOfFavorites,
  favorites,
}) => {
  return (
    <nav className="flex items-center justify-between  bg-slate700 p-4 rounded-2xl mb-4 text-white">
      <h1 className="text-slate300 font-bold">Logo</h1>
      <input
        className="py-3 px-4 rounded-lg text-slate100 bg-slate500 text-base hidden md:inline-block"
        type="text"
        placeholder="Serach..."
        value={serach}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-slate400">found {numOfList} result </p>
      <button
        onClick={(prev) => setIsOpen(!prev)}
        className="relative  text-rose500"
      >
        <HeartIcon className="w-8 h-8" />
        <span className="absolute text-xs top-0 -right-1 h-4 leading-4 text-center  bg-rose500 text-white rounded-[50%]  py-[1px] px-[4px]  flex items-center justify-center">
          {numOfFavorites}
        </span>
      </button>
      <Favorites favorites={favorites} />
    </nav>
  );
};

export default Navbar;

function Favorites({ favorites }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Modal>{favorites.map(item=><Character/>)}</Modal> */}
    </>
  );
}
