import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";
import { PinSharp } from '@mui/icons-material';

function App() {

  const [pins, setNewPins] = useState([]) 

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    });
  }

  const onSearchSubmit = (term) => {
    console.log("on search submit", term)
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function(a,b) {
        return 0.5 - Math.random();
      });

      setNewPins(newPins);
    })
  }

  return (
    <div className="app">
        <Header onSubmit={onSearchSubmit}/>
        <MainBoard pins={pins} />
    </div>
  );
}

export default App;
