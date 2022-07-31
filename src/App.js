import "./App.css";
import AddWords from "./Components/AddWords.js";
import SearchWords from "./Components/SearchWords.js";
import React, { useState } from "react";

function App() {
  const [wordList, setWordList] = useState("");
  return (
    <div className="Container">
      <h1>Dictionary</h1>
      <AddWords wordList={wordList} setWordList={setWordList} />
      <SearchWords wordList={wordList} />
    </div>
  );
}

export default App;
