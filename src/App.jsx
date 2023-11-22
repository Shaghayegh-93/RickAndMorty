import { useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharachterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import  { Toaster } from "react-hot-toast";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selctedId, setSelectedId] = useState(null);
  const { isLoading, allCharacters } = useCharacters(
    "https://rickandmortyapi.com/api/character/?name",
    search
  );

  const [favorites, setFavorites] = useLocalStorage("Favorites", []);

  const selectedIdHandler = (id) => {
    setSelectedId(Number(id));
  };
  const addFavoriteHandler = (id) => {
    const favoriteCharacter = allCharacters.find(
      (character) => character.id === Number(id)
    );
    setFavorites((prev) => [...prev, favoriteCharacter]);
  };

  const isAddToFavourite = favorites.map((fav) => fav.id).includes(selctedId);
  const removeFavouriteHandler = (id) => {
    const updatedFavourites = favorites.filter((fav) => fav.id !== selctedId);
    setFavorites(updatedFavourites);
  };
  return (
    <div className="">
      <Toaster />
      <Navbar
        numOfList={allCharacters?.length}
        search={search}
        setSearch={setSearch}
        favorites={favorites}
        removeFavouriteHandler={removeFavouriteHandler}
      />
      <div className=" flex flex-col md:flex-row justify-between w-full gap-10">
        <CharachterList
          allCharacters={allCharacters}
          isLoading={isLoading}
          selctedId={selctedId}
          selectedIdHandler={selectedIdHandler}
        />
        <CharacterDetail
          selctedId={selctedId}
          addFavoriteHandler={addFavoriteHandler}
          isAddToFavourite={isAddToFavourite}
        />
      </div>
    </div>
  );
}

export default App;
