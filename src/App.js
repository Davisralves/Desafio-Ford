import "./App.css";
import React, { useState } from "react";
import { ascEncrypt, ascDecrypt, reverseWord } from "./encryptFunctions";

function App() {
	const [word, setWord] = useState("");
	const [inputText, setInputText] =useState("");

	const encrypt = (e) => {
    e.preventDefault();
		let encryptAsc = ascEncrypt(inputText);
		setWord(reverseWord(encryptAsc));
	};

	const decrypt = () => {
		let revertedWord = reverseWord(inputText);
		setWord(ascDecrypt(revertedWord));
	};

	const handleChange = ({ target: { value } }) => {
    setInputText(value);
  };

	return (
		<div className="App">
			<h3>encrypt or decrypt an word</h3>
			<form>
				<label htmlFor="word">
					Word: <input id="word" onChange={(e) => handleChange(e)}></input>
				</label>
				<button type="submit" onClick={(e) => encrypt(e)}>Encrypt</button>
				<button type="button" onClick={decrypt}>Decrypt</button>
			</form>
			<h6>{word}</h6>
		</div>
	);
}

export default App;
