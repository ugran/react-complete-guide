import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} year old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={} />
        </div>
    )

}

export default person;