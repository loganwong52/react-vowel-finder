import React from 'react';
import { useState } from 'react';
// styling
import './App.css';

// components
import MyHeader from './components/MyHeader';
import WordInput from './components/WordInput';
import VowelFinder from './components/VowelFinder';
import WordHistory from './components/WordHistory';

function App() {
  // states
  const [word, setWord] = useState("")
  let foo =
    <p>
      <span>j</span>
      <span>e</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>
    </p>
  const [wordHistory, updateHistory] = useState([foo])
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
      <WordInput functionToCallWhenButtonIsClicked={onSubmitWord} wordHistory={wordHistory} updateHistory={updateHistory} />
      <VowelFinder word={word} />
      <WordHistory wordHistory={wordHistory} />
    </div>
  )
}
export default App;
