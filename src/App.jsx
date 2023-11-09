import { useEffect, useState } from "react";
// import { allCharacters } from "../data/data";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${serach}`
        );
        console.log(data);
        setallCharacters(data.results.slice(0, 5));
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
  console.log("favorite:", favorites);
  return (
    <div className="">
      <Toaster />
      <Navbar
        numOfList={allCharacters?.length}
        serach={serach}
        setSearch={setSearch}
        numOfFavorites={favorites.length}
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
        />
      </div>
    </div>
  );
}

export default App;
