import { UseState } from "../hooks/useState";
import { UseEffect } from "../hooks/useEffect";
import { UseRef } from "../hooks/useRef";
import { UseMemo } from "../hooks/useMemo";
import { UseCallback } from "../hooks/useCallback/useCallback";
import { UseContext } from "../hooks/UseContext/UseContext";


export const usePath = (path) => {
    switch (path) {
        case 'useState':
            return <UseState />
        case 'useEffect':
            return <UseEffect />
        case 'useRef':
            return <UseRef />
        case 'useMemo':
            return <UseMemo />
        case 'useCallback':
            return <UseCallback/>
        case 'useContext':
            return <UseContext/>

        default:
            return <UseState />
        }
}