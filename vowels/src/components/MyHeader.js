import React from 'react';
import "./MyHeader.css"

function MyHeader(props) {

    // console.log("props:", props)
    return (
        <h2 className='my-header'>
            {props.text}
        </h2>
    )
}

export default MyHeader