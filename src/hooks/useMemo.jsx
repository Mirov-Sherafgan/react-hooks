import React, { useState, useMemo, useEffect } from 'react'
import { classes } from '../classes'

function complexCompute(number) {
    console.log('computing...')
    let i = 0;
    while (i < 10000000) i++
    return number * 2
}

export const UseMemo = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'blue' : '#000',
        fontWeight: 'bolder'
    }), [colored])

    useEffect(() => {
        console.log('styles change')
    }, [styles])

    const compute = useMemo(() => {
        return complexCompute(number)
    }, [number])


    const handleChangeButton = () => {
        setColored(!colored)
    }

  

  return (
    <main>
        <div style={classes.heading}>
            <h1>useMemo</h1>
            <hr color='#2c3e50' size="50px" width="100px" />
        </div>

        <div style={classes.block}>
            <h2 style={styles}>Number is equal to: </h2>
            <h3>{compute}</h3>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Remove</button>
            <button onClick={() => handleChangeButton()}>Change color</button>
        </div>
        
    </main>
  )
}
