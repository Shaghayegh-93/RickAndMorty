import React from "react";
import { character, episodes } from "../../data/data";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const CharacterDetail = () => {
  return (
    <div className="flex-1 rounded-lg ">
      <div className="grid grid-cols-3  bg-slate800 rounded-lg cursor-pointer transition-all duration-[0.2s] ease-out hover:bg-slate700 mb-6 last:mb-0">
        <img
          src={character.image}
          alt=""
          className="col-start-1 col-end-2  rounded-lg mt-10 md:mt-0 "
        />
        <div className="flex flex-col  col-start-2 md:col-end-3 col-end-4 ml-4 mt-4 ">
          <h3 className="text-white  md:font-semibold text-xl ">
            <span>{character.gender === "Male" ? "🙍‍♂️" : "🙎‍♀️"}</span>
            <span>{character.name}</span>
          </h3>
          <div className=" text-slate200 mb-2">
            <span
              className={`inline-block w-3 h-3 rounded-[50%] bg-green600 mr-1 
          
           ${character.status === "Dead" ? "bg-rose600" : ""}
         ]`}
            ></span>
            <span>{character.status}</span> - &nbsp;
            <span>{character.species}</span>
          </div>
          <div className="text-slate500 mb-4 last:mt-1 last:text-slate300 last:font-bold">
            <p>Last Known Location:</p>
            <p className="font-medium text-lg text-slate300">
              {character.location.name}
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <button className="py-1 px-2 md:py-3 md:px-4   rounded-2xl bg-slate500 text-slate-100 md:font-bold">
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
      <EpisodeList />
    </div>
  );
};

export default CharacterDetail;

function EpisodeList() {
  return (
    <div className="text-white p-4 bg-slate800 rounded-lg cursor-pointer transition-all duration-[0.2s] ease-out hover:bg-slate700">
      <div className="flex justify-between mb-6">
        <h2 className="md:font-bold text-2xl text-slate-400">
          List of Episodes:
        </h2>
        <button className="text-slate300">
          <ArrowDownCircleIcon className="w-8 h-8" />
        </button>
      </div>
      <ul className="flex flex-col">
        {episodes.map((episode, index) => (
          <li className="flex justify-between mb-4" key={episode.id}>
            <div className="text-sm md:text-lg">
              {String(index + 1).padStart(2, "0")}&nbsp;-&nbsp;{episode.episode}
              : <strong>{episode.name}</strong>
            </div>
            <div className="px-2 md:px-4  rounded-2xl bg-slate500 text-slate-100  ">
              {episode.air_date}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
