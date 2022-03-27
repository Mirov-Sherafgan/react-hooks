import React, { useState } from 'react'
import { classes } from '../classes'

function computeInitialCounter() {
    console.log('some calculations...');
    return Math.trunc(Math.random() * 20)
}


export function UseState() {

    // ------ useState -------
    // first variable is state 
    // second is a function that updates the state
    const [counter, setCounter]  =  useState(() => computeInitialCounter()) // destructuring array
    const [state, setTitle] = useState({
        title: 'Date',
        date: Date.now()
    })

    const handleChangeCounter = (type) => {
        if (type === 'inc') {
            setCounter(prev => prev + 1)
        } else {
            setCounter(prev => prev - 1)
        }
    }

    const updateTitle = () => {
        setTitle(prev => ({
            ...prev,
            title: "New Title"
        }))
    }


  return (
    <main>
        <div style={classes.heading}>
            <h1>useState</h1>
            <hr color='#2c3e50' size="50px" width="100px" />
        </div>

        <div style={classes.block}>
            <h2>Counter: {counter}</h2>
            <button onClick={() => handleChangeCounter('inc')}>Increment</button>
            <button onClick={() => handleChangeCounter('dec')}>Decrement</button>
            <button style={classes.button.success} onClick={updateTitle}>Update Title</button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>

    </main>
  )
}
