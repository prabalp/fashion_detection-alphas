import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import Upload from "./components/UploadPics";
import unsplash from "./api/unsplash"; //need to remove this
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { PinSharp } from "@mui/icons-material";

function App() {
  const [pins, setNewPins] = useState([]);

  // rendering a all the images
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };

  // searching a tag
  const onSearchSubmit = (term) => {
    console.log("on search submit", term);
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      setNewPins(newPins);
    });
  };

  // refresh every time the page is loaded
  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "Tokyo", "dogs", "cats", "Bali"];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random;
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Header onSubmit={onSearchSubmit} />
        <Switch>
          <Route exact path="/">
            <MainBoard pins={pins} />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
