import React, { useEffect, useState } from 'react'
import { classes } from '../classes'


export const UseEffect = () => {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [position, setPosition] = useState({
    x: 0, y: 0
  })

  const types = ['users', 'todos', 'posts']

  useEffect(() => {
    console.log('render');
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type])

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  const handleButtonClick = (name) => {
    setType(name)
  }

  const mouseMoveHandler = event => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  return (
    <main>
        <div style={classes.heading}>
            <h1>useEffect</h1>
            <hr color='#2c3e50' size="50px" width="100px" />
        </div>

        <div style={classes.block}>
          <h1>Type: {type}</h1>
          {types.map(el => <button onClick={ () =>  handleButtonClick(el)} style={classes.button.error} key={el}>{el.toUpperCase()}</button>)}
        </div>

        <div style={classes.block}>
          {JSON.stringify(position, null, 2)}
        </div>

        {/* <div style={classes.block}>
          {JSON.stringify(data, null, 2 )}
        </div> */}
    </main>
  )
}
