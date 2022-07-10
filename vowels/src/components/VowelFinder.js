import React from 'react'

function VowelFinder(props) {

    const renderHighlightVowels = () => {
        if (props.word === "")
            return null

        // this will be a list of JSX span elements with letters to push to the DOM
        let elements = []
        let numVowels = 0
        for (let i = 0; i < props.word.length; i++) {
            // check if letter is a vowel
            let isVowel = (/[aeiouy]/i).test(props.word[i])
            if (isVowel) {
                elements.push(<span key={i} className='highlight'>{props.word[i]}</span>)
                numVowels += 1

            } else {
                elements.push(<span key={i}>{props.word[i]}</span>)
            }
        }

        elements.push(
            <span key={props.word.length}>
                {<br></br>}
                There are {numVowels} vowels.
            </span>
        )
        // array of JSX elements (will be unpacked somehow when rendering)
        return elements
    }

    return (
        <div>
            You entered this word:
            <p id="analyzedWord">
                {renderHighlightVowels()}
            </p>
        </div>
    )
}

export default VowelFinder;