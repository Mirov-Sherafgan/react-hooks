import React, {useContext} from "react"
import { AlertContext } from "./UseContext"

const Alert = () => {
    const visible = useContext(AlertContext)

    if (!visible) return null

    return (
        <div style={{width: '100%', background: "#ffd48587", padding: "10px"}}>
            This is a danger alert
        </div>
    )
}

export default Alert