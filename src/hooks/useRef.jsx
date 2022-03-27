import React, { useEffect, useRef, useState } from 'react'
import { classes } from '../classes'


export const UseRef = () => {
    const [value, setValue] = useState('initial')

    const renderCount = useRef(1)
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
    })
    
  return (
    <main>
        <div style={classes.heading}>
            <h1>useRef</h1>
            <h2>useRef don't call render method</h2>
            <hr color='#2c3e50' size="50px" width="100px" />
            </div>

            <div style={classes.block}>
                <input type="text" ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
                <button onClick={() => inputRef.current.focus()}>Click to focus</button>
            </div>

            <div style={classes.block}>
                <h2>How many times rendered the component ?</h2>
                <h3>{renderCount.current}</h3>
            </div>
    </main>
  )
}
