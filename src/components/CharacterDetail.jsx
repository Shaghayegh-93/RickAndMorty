import React from "react";
import { character } from "../../data/data";

const CharacterDetail = () => {
  return (
    <div className="bg-slate-800 flex-1">
      <div className="grid grid-cols-5 grid-rows-4  bg-slate800 rounded-lg cursor-pointer transition-all duration-[0.2s] ease-out hover:bg-slate700 mb-6 last:mb-0">
        <img
          src={character.image}
          alt=""
          className="col-start-1 col-end-3 row-start-1 row-end-4   rounded-lg"
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
      </div>
    </div>
  );
};

export default CharacterDetail;
