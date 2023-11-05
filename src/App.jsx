import { useEffect, useState } from "react";
import { allCharacters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharachterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  // const [allCharacters, setallCharacters] = useState([]);

  useEffect(()=>{
    try {
      
    } catch (error) {
      
    }
  },[])
  return (
    <div className="">
      <Navbar />
      <div className=" flex flex-col md:flex-row justify-between w-full gap-10">
        <CharachterList allCharacters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
