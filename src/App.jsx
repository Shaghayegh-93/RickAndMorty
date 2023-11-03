import { allCharacters } from "../data/data";
import "./App.css";
import CharachterList from "./components/CharacterList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-between w-full gap-8">
        <CharachterList allCharacters={allCharacters} />
        {/* <CharacterDetail /> */}
      </div>
    </div>
  );
}

export default App;
