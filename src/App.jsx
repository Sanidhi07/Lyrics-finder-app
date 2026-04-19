import { useState } from 'react'
import './App.css'


function App() {
  const [song,setSong]=useState("");
  const [artist,setArtist]=useState("");
  const [lyrics,setLyrics]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("")

 const handleSearch = async () => {
  setLoading(true)
  setError("");
  setLyrics("");
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${song}`
    );

    const data = await response.json();

    if(data.lyrics){
      setLyrics(data.lyrics);
    }else {
      setError("Lyrics not found")
    }
   
  } catch (error) {
    setError("Something went wrong ❌")
  }
  setLoading(false)
};


  return (
    <div className="container">
      <h1>Lyrics finder</h1>
      <div className='search-box'>
      <input type="text" placeholder='Enter song name' value={song} onChange={(e)=> setSong(e.target.value)}/>
      <br/>
      <input type="text" placeholder='Enter artist name' value={artist} onChange={(e)=>setArtist(e.target.value)}/>
      <br/>
      <button onClick={handleSearch} className='search-box' disabled={loading}>{loading ? "Searching..." : "Search"}</button>
      </div>
      {loading && <p className='loading'>Loading...⏳</p>}
     {error && <p className='error'>{error}</p>}
     {lyrics && (
     <div className='lyrics-box'>
      <h3>Lyrics:</h3>
       <p>{lyrics}</p>
     </div>
    )}
    </div>
  )
}

export default App;
