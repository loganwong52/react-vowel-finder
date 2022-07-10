import React from 'react';
import { useState } from 'react';
// styling
import './App.css';

// components
import MyHeader from './components/MyHeader';
import WordInput from './components/WordInput';
import VowelFinder from './components/VowelFinder';

function App() {
  // states
  const [word, setWord] = useState("")
  // this only initializes word to be "" 1 time-- when it's first created. Not every time.

  // event handler
  const onSubmitWord = (newWord) => {
    setWord(newWord)   // udates the state value word value
    // console.log("New word: ", word)
  }


  // render and return JSX
  return (
    <div className="App">
      <MyHeader text="My Vowel Finder App" />
      <hr />
      <WordInput functionToCallWhenButtonIsClicked={onSubmitWord} />
      <VowelFinder word={word} />
    </div>
  )
}
export default App;
