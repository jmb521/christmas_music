import './App.css';
import React, { useState} from 'react'
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [user, setUser] = useState({})
  // const [errors, setErrors] = useState([])
  // const [name, setName] = useState("")
  // const [genre, setGenre] = useState("")
  // const [artists, setArtists] = useState([])
  // const handleOnSubmit = e => {
  //   e.preventDefault()
  //   fetch("/artists", {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type": "application/json"

  //     }, 
  //     body: JSON.stringify({
  //       artist: {
  //         name, 
  //         genre
  //       }
  //     })
  //   })
  //   // .then(response => response.json())
  //   .then(response => {
  //     if(response.ok) {
  //       response.json()
  //       .then(r => {
  //         setArtists([...artists, r])
          
  //       })
  //     } 
  //     else {
  //       response.json()
  //       .then(r => {
  //         setErrors(r.errors)
  //       })
  //     }
       
  //   })
 
  //   .catch(errors => {
  //     console.log(errors)
  //   })
  // }


  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />}/>
            <Route path="/" element={<Home />} />
            
          </Routes>
      </Router>
      {/* <h3>Add new Artist</h3>
      <ul>
      {errors ? errors.map(e => <li>{e}</li>) : null}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <label>Artist name: </label> 
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <br />
        <label>Genre: </label> 
        <input type="text" name="genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>
        <br />
        <input type="submit" name="submit" />
      </form>
      {artists ? artists.map(a => <p>{a.name}</p>) : null} */}
    </div>
  );
}

export default App;



