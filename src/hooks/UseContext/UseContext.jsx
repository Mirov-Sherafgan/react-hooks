import React, { useState } from 'react'
import { classes } from '../../classes'
import Alert from './Alert'
import Main from './Main'

export const AlertContext = React.createContext()

export const UseContext = () => {
  const [visible, setVisible] = useState(true)

  const toggleAlert = () => setVisible(prev => !prev)

  return (
    <main>
        <div style={classes.heading}>
            <h1>useContext</h1>
            <hr color='#2c3e50' size="50px" width="100px" />
        </div>

        <div style={classes.block}>
            <AlertContext.Provider value={visible}>
                <Alert />
                <Main toggle={toggleAlert} />
            </AlertContext.Provider>
        </div>
    </main>
  )
}
