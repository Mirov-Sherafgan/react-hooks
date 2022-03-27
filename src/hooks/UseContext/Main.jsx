import React, {useContext} from "react";
import { AlertContext } from "./UseContext";

const Main = ({toggle}) => {
    const alertContext = useContext(AlertContext)
    return (
        <main>
            <h2>Hello from Context example</h2>
            <button onClick={() => toggle()}>{alertContext ? 'Hide alert' : 'Show alert'}</button>
        </main>
    )
}

export default Main