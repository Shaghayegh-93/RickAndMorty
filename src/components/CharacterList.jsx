import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";

const CharacterList = ({ allCharacters }) => {
  return (
    <div>
      {allCharacters.map((character) => (
        <div className="grid grid-cols-[4rem,1fr,2rem] grid-rows-2 gap-x-4 bg-slate800 rounded-lg p-3 cursor-pointer transition-all duration-[0.2s] ease-out hover:bg-slate700 mb-6 last:mb-0">
          <img
            src={character.image}
            alt=""
            className="col-start-1 col-end-3 row-start-1 row-end-3  w-16 h-16 rounded-2xl"
          />
          <h3 className="col-start-2 col-end-3 row-start-1 row-end-2">
            <span>{character.gender === "Male" ? "🙍‍♂️" : "🙎‍♀️"}</span>
            <span>{character.name}</span>
          </h3>
          <div className=" col-start-2 col-end-3 row-start-2 row-end-3 self-center text-slate200">
            <span
              className={`inline-block w-3 h-3 rounded-[50%] bg-green600 mr-1 
          
           ${character.status === "Dead" ? "bg-rose600" : ""}
         ]`}
            ></span>
            <span>{character.status}</span> - &nbsp;
            <span>{character.species}</span>
          </div>
          <button className="col-start-3 col-end-4 row-start-1 row-end-3 self-center  col-span-2  text-rose500   ">
            <EyeIcon className="w-6 h-6 " />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;