import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
function App() {
  return (
    <div className="app">
        <Header />
        <MainBoard />
    </div>
  );
}

export default App;
