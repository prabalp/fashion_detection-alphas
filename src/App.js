import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";

function App() {

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      }
    });
  }

  const onSearchSubmit = (term) => {
    console.log("on search submit", term)
    getImages(term)
  }

  return (
    <div className="app">
        <Header onSubmit={onSearchSubmit}/>
        <MainBoard />
    </div>
  );
}

export default App;
