import React, { useState } from 'react'
import {usePath} from './custom/usePath'
import "./index.css"



const App = () => {
  const [path, setPath] = useState('useContext')
  

  const routes = usePath(path)

  // useEffect(() => {
  //   const res = window.prompt('Type which kind of hooks you want to see. For example of useEffect type "useEffect", "useState"', 'useState')
  //   console.log(res);
  //   setPath(res)
  // }, [])
 

  return (
    <main className='main'>{routes}</main>
  )
}

export default App