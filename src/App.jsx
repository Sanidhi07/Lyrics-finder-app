import { useState } from 'react'
import './App.css'


function App() {
  const [song,setSong]=useState("");
  const [artist,setArtist]=useState("");
  const [lyrics,setLyrics]=useState("");

 const handleSearch = async () => {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${song}`
    );

    const data = await response.json();

    setLyrics(data.lyrics);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div>
      <h1>Lyrics finder</h1>
      <input type="text" placeholder='Enter song name' value={song} onChange={(e)=> setSong(e.target.value)}/>
      <br/>
      <input type="text" placeholder='Enter artist name' value={artist} onChange={(e)=>setArtist(e.target.value)}/>
      <br/>
      <button onClick={handleSearch}>Search</button>
     <div>
       <h3>Lyrics:</h3>
       <p>{lyrics}</p>
     </div>
    </div>
  )
}

export default App
