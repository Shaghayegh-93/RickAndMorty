import { useEffect, useState } from "react";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharachterList from "./components/CharacterList";
import Navbar from "./components/Navbar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [allCharacters, setallCharacters] = useState([]);
  const [serach, setSearch] = useState("");
  const [selctedId, setSelectedId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  console.log("allll", allCharacters);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${serach}`,
          { signal }
        );
        console.log(error);
        setallCharacters(data.results.slice(0, 5));
      } catch (error) {
        if (!axios.isCancel()) {
          setallCharacters([]);
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [serach]);

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
        serach={serach}
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
