import React, { useState } from "react";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import { Character } from "./CharacterList";

const Navbar = ({
  numOfList,
  search,
  setSearch,
  favorites,
  removeFavouriteHandler,
}) => {
  return (
    <nav className="flex items-center justify-between  bg-slate700 p-4 rounded-2xl mb-4 text-white">
      <h1 className="text-slate300 font-bold">Logo</h1>
      <input
        className="py-3 px-4 rounded-lg text-slate100 bg-slate500 text-base hidden md:inline-block"
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-slate400">found {numOfList} result </p>

      <Favorites
        favorites={favorites}
        removeFavouriteHandler={removeFavouriteHandler}
      />
    </nav>
  );
};

export default Navbar;

function Favorites({ favorites, removeFavouriteHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onOpen={setIsOpen}>
        {favorites.map((character) => (
          <Character character={character} key={character.id}>
            <button onClick={() => removeFavouriteHandler(character.id)}>
              <TrashIcon className="w-8 h-8 text-rose-500" />
            </button>
          </Character>
        ))}
      </Modal>
      <button
        onClick={() => setIsOpen((is) => !is)}
        className="relative  text-rose500"
      >
        <HeartIcon className="w-8 h-8" />
        <span className="absolute text-xs top-0 -right-1 h-4 leading-4 text-center  bg-rose500 text-white rounded-[50%]  py-[1px] px-[4px]  flex items-center justify-center">
          {favorites.length}
        </span>
      </button>
    </>
  );
}
