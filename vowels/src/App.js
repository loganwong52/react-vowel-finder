import React from 'react';
import { useState } from 'react';
// styling
import './App.css';

// // components
// import VowelFinder from "./components/VowelFinder"

function App() {
  // states
  const [word, setWord] = useState("")
  // this only initializes word to be "" 1 time-- when it's first created. Not every time.

  // local variable
  const inputIdStr = 'input-word'


  // event handler
  const onSubmitWord = () => {
    let inputElement = document.getElementById(inputIdStr)
    if (inputElement) {
      // if not null...
      let userWord = inputElement.value

      setWord(userWord)   // udates the state value word value
    }
  }

  // render and return JSX
  return (
    <div className="App">
      <h2 id="my-header">Vowel Finder</h2>
      <hr />
      <input id={inputIdStr} type="text" placholder="enter a word" />
      <button onClick={onSubmitWord}>Submit Word</button>
      <p>
        You entered this word: {word}
      </p>
    </div>
  )
}
export default App;
