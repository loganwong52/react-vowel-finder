import React from 'react';
import { useState } from 'react';
// styling
import './App.css';

// components
import MyHeader from './components/MyHeader';
import WordInput from './components/WordInput';
import VowelFinder from './components/VowelFinder';
// import WordHistory from './components/WordHistory';

function App() {
  // states
  const [word, setWord] = useState("")
  const [wordHistory, updateHistory] = useState([])
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
      <VowelFinder word={word} wordHistory={wordHistory} />
      {/* <WordHistory wordHistory={wordHistory} /> */}
    </div>
  )
}
export default App;
