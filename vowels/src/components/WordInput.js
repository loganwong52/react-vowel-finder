// components/WordInput.js
import React from 'react'

// global variable
const inputIdStr = 'input-word'

function WordInput(props) { // notice that we take in a parameter for our functional component, which is an object that captures ALL props that are passed down

    // event handler
    const clickedHandler = () => {
        // let paragraph = document.getElementById('#analyzedWord')
        let analyzedWord = document.querySelector('#analyzedWord')
        if (analyzedWord) {
            console.log(analyzedWord)
            let newHistory = [...props.wordHistory, analyzedWord]
            props.updateHistory(newHistory)
        }


        let inputElement = document.getElementById(inputIdStr)
        if (inputElement) {
            // if not null...
            // get user input
            let userWord = inputElement.value
            // pass userinput to parent's prop value function
            props.functionToCallWhenButtonIsClicked(userWord)
        }
    }

    // render
    return (
        <div>
            <input id={inputIdStr} type="text" placeholder="enter a word" />
            <button onClick={clickedHandler}>Submit Word</button>
        </div >
    )
}

export default WordInput;