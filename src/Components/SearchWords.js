import { useState } from "react";

function SearchWords({ wordList }) {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const search = () => {
    if (wordList.includes(word)) {
      setMessage("The word " + word + " is in dictionary!");
    } else {
      setMessage("The word " + word + " is NOT in the dictionary!");
    }
  };

  return (
    <div className="Component">
      <input
        type="text"
        className="Input"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      ></input>
      <button onClick={search} className="Button">
        Search
      </button>
      <p>{message}</p>
    </div>
  );
}

export default SearchWords;
