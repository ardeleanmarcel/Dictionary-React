import { useState } from "react";

function AddWords({ wordList, setWordList }) {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const addWord = () => {
    if (!wordList.includes(word)) {
      setWordList(wordList + word);
      setMessage("The word " + word + " has been added!");
    } else {
      setMessage("The word " + word + " is already in the dictionary!");
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
      <button onClick={addWord} className="Button">
        Add
      </button>
      <p>{message}</p>
    </div>
  );
}

export default AddWords;
