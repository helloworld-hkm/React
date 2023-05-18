import { useEffect, useState } from "react";

import { useGetDigimon } from "../hooks/digimonHook";

function ListDigimon() {
  const digimons = useGetDigimon()

  return (
    <div>
      {console.log(digimons)}
      <h1>Digimon</h1>
      {digimons.length === 0 ? <span>Loading . . .</span> : 
      digimons.map(item=>(
        <div>
            <img src={item.img} alt={200} />
            <h3>{item.name}</h3>
            <h4>{item.level}</h4>
        </div>
      ))
      }
    </div>
  );
}

export default ListDigimon;
