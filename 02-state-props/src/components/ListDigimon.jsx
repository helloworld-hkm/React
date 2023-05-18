import { useState } from "react";
import Card from "./Card";
function ListDigimon() {
  const [digimons, setDigimons] = useState([
    { nama: "agumon", img: "https://digimon.shadowsmith.com/img/agumon.jpg" },
    { nama: "koromon", img: "https://digimon.shadowsmith.com/img/koromon.jpg" },
    { nama: "veemon", img: "https://digimon.shadowsmith.com/img/veemon.jpg" },
    { nama: "gabumon", img: "https://digimon.shadowsmith.com/img/gabumon.jpg" },
  ]);
  return (
    <section className="list-digimon">
      {/* cara manual */}
      {/* <Card
        img="https://digimon.shadowsmith.com/img/agumon.jpg"
        name="agumon"
      />
      <Card
        img="https://digimon.shadowsmith.com/img/koromon.jpg"
        name="koromon"
      />
      <Card
        img="https://digimon.shadowsmith.com/img/veemon.jpg"
        name="veemon"
      />
      <Card
        img="https://digimon.shadowsmith.com/img/gabumon.jpg"
        name="Gabumon"
      /> */}
      {/* menggunakan state yang menyimpan arryofobject */}

      {digimons.length === 0 ? (
        <p>Tidak ada data</p>
      ) : (
        digimons.map((data, index) => (
          <Card key={index} img={data.img} name={data.nama} />
        ))
      )}
    </section>
  );
}
export default ListDigimon;
