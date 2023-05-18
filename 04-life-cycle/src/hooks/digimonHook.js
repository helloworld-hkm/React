import { useEffect, useState } from "react";
import  axios  from 'axios';


export function useGetDigimon() {
    const [digimons, setDigimons] = useState([]);
  
  useEffect(() => {
    // https://digimon-api.vercel.app/api/digimon
    // https://digimon-api.vercel.app/api/digimon
    
    // const fetchDigimon = fetch("https://digimon-api.vercel.app/api/digimon");

    // fetchDigimon
    //   .then((response) => response.json())
    //   .then((result) => {
    //     // console.log(result);
    //     setDigimons(result);
    //   })
  
    axios("https://digimon-api.vercel.app/api/digimon")
    .then(({data}) => setDigimons(data))
    .catch ((err) =>console.log(err))
  }, []);
  return digimons
}