import { useState } from "react"

function Profile() {
    const [name,setName] = useState("hakim")
    const [img,setImg] = useState("https://digimon.shadowsmith.com/img/veemon.jpg")
    const [age,setAge] = useState(21)
    return(
        <div>
            <img src={img} alt="" />
            <h1 onClick={()=>setName("cek")}>Nama : {name}</h1>
            <h2 onClick={()=>setAge(20)}>umur: {age} Tahun</h2>
        </div>
    )
}
export default Profile