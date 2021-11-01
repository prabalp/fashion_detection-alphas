import React, { useState,useEffect } from 'react'
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

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'Bali' ];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a,b) {
            return 0.5 - Math.random;
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    })
  }

  useEffect(() => {

    getNewPins()
  },  [])

  return (
    <div className="app">
        <Header onSubmit={onSearchSubmit}/>
        <MainBoard pins={pins} />
    </div>
  );
}

export default App;
