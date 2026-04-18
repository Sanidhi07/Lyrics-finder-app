import { useState } from 'react'
import './App.css'


function App() {
  const [song,setSong]=useState("");
  const [artist,setArtist]=useState("");

  return (
    <div>
      <h1>Lyrics finder</h1>
      <input type="text" placeholder='Enter song name' value={song} onChange={(e)=> setSong(e.target.value)}/>
      <br/>
      <input type="text" placeholder='Enter artist name' value={artist} onChange={(e)=>setArtist(e.target.value)}/>
      <br/>
      <button>Search</button>
      <p>Song : {song}</p>
      <p>Artist : {artist}</p>
    </div>
  )
}

export default App
