import React, { useCallback, useEffect, useState } from 'react'
import { classes } from '../../classes'
import { ItemList } from './ItemList'

export const UseCallback = () => {
  const [colored, setColored] = useState(false)
  const [number, setNumber] = useState(1)

  const styles = {
    color: colored ? 'blue' : 'red',
    fontWeight: 'bolder'
  }

  const generateItems = useCallback(() => {
    return new Array(number).fill('').map((_, i) => `Element #${i + 1}`)
  }, [number])


  useEffect(() => {
    console.log('number render')
  }, [number])


  return (
    <main>
    <div style={classes.heading}>
        <h1>useCallback</h1>
        <hr color='#2c3e50' size="50px" width="100px" />
    </div>

    <div style={classes.block}>
        <h2 style={styles}>Number is equal to: </h2>
        <h3>{number}</h3>
        <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
        <button onClick={() => setNumber(prev => prev - 1)}>Remove</button>
        <button onClick={() => setColored(!colored)}>Change color</button>
    </div>

    <ItemList getItems={generateItems} />
    
</main>
  )
}
