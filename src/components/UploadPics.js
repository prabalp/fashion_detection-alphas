import React, { useState } from "react";
import { firebase, storage } from "../firebase/firebase";

export default function App() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    console.log(file);
    const ref = storage.ref(`images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        setURL(url);
      });
    });
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>Upload</button>
      </form>
      <img src={url} alt="uploaded pic" />
    </div>
  );
}
