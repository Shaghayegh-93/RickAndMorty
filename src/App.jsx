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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${serach}`
        );
        setallCharacters(data.results.slice(0, 5));
      } catch (error) {
        toast.error(error.response.data.error);
      } finally {
        setIsLoading(false);
      }
    };
    if (serach.length < 3) {
      setallCharacters([]);
      return;
    }
    fetchData();
  }, [serach]);
  return (
    <div className="">
      <Toaster />
      <Navbar
        numOfList={allCharacters?.length}
        serach={serach}
        setSearch={setSearch}
      />
      <div className=" flex flex-col md:flex-row justify-between w-full gap-10">
        <CharachterList allCharacters={allCharacters} isLoading={isLoading} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
