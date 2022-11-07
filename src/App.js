import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Outfits/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListOutfits from './Outfits/ListOutfits';
import NewOutfit from './Outfits/NewOutfit';
import NavBar from './NavBar';
import SeasonsList from "./Outfits/SeasonsList"



function App() {
  const [outfits, setOutfits] = useState([])
  const [seasons, setSeasons] = useState([])


  useEffect(() => {
    fetch('http://localhost:9292/outfits')
    .then(resp => resp.json())
    .then(data => setOutfits(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/seasons')
    .then(resp => resp.json())
    .then(data => setSeasons(data))
  }, [])

  

  const addOutfit = outfit => {
    setOutfits([...outfits, outfit])
  }

  const addSeason = season => {
    setSeasons({...seasons, season})
  }
  
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home addOutfit={addOutfit}/>} />
        <Route path="/outfits" element={<ListOutfits outfits={outfits}/>} />
        <Route path="/outfits/new" element={<NewOutfit outfits={outfits} addOutfit={addOutfit}/>} />
        <Route path="/outfits/season" element={<SeasonsList seasons={seasons} addSeason={addSeason} outfits={outfits}/>} />
      </Routes>
    </Router>
  );
}

export default App;
