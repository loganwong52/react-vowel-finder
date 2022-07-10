import React from 'react'

// global variable
// let wordHistory = []

function WordHistory(props) {

    const displayWordHistory = () => {
        const wh = props.wordHistory
        console.log(wh)
        console.log("wh.length: ", wh.length)
        // let listItems = wh.map((word) =>
        //     <li>{word}</li>
        // )
        // return listItems

        let elements = []
        for (let i = 0; i < wh.length; i++) {
            console.log(wh[i])
            console.log(typeof wh[i])

            // elements.push(
            //     <li key={i}>
            //         {wh[i]}
            //     </li>
            // )
            console.log("the value of i: ", i)
        }
        return elements
    }

    return (
        <div className="container">
            Word History:
            <br></br>
            <ul>
                {displayWordHistory()}
            </ul>
        </div>
    )
}

export default WordHistory;