import React from 'react'

function VowelFinder(props) {

    const renderHighlightVowels = (targetWord) => {
        // this will be a list of JSX span elements with letters to push to the DOM
        let elements = []
        let numVowels = 0
        for (let i = 0; i < targetWord.length; i++) {
            // check if letter is a vowel
            let isVowel = (/[aeiouy]/i).test(targetWord[i])
            if (isVowel) {
                elements.push(<span key={i} className='highlight'>{targetWord[i]}</span>)
                numVowels += 1

            } else {
                elements.push(<span key={i}>{targetWord[i]}</span>)
            }
        }

        elements.push(
            <span key={targetWord.length}>
                {<br></br>}
                There are {numVowels} vowels.
            </span>
        )
        // array of JSX elements (will be unpacked somehow when rendering)
        return elements
    }

    /*
    State value wordHistory is in App.js.
    User input is saved in WordInput.js when button is clicked: updateWord state value function.
    wordHistory is passed into this file.
    As long as wordHistory is greater than 1, loop thru it, display all of it, except
    for the most recent one, which is being displayed, since it was just entered by the user.
    */
    const displayWordHistory = () => {
        // console.log(props.wordHistory)

        const wh = props.wordHistory
        let elements = []
        if (wh.length > 1) {
            for (let i = 0; i < wh.length - 1; i++) {
                elements.push(
                    <li key={i}>
                        {renderHighlightVowels(wh[i])}
                    </li>
                )
            }
        }
        return elements
    }

    return (
        <div className="container" >
            <p>
                You entered this word: {renderHighlightVowels(props.word)}
            </p>
            Word History:
            <br></br>
            <ul>
                {displayWordHistory()}
            </ul>
        </div >
    )
}

export default VowelFinder;