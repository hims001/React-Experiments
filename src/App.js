import React, { useState, useEffect, useReducer } from 'react'

//Using useState hook
export function App(){
    const [status, setStatus] = useState("Open")
    const [checked, setChecked] = useState(false)
    const [checkedRed, toggle] = useReducer(checkedRed => !checkedRed, false)
    useEffect(() => {
        console.log("checked : " + checked)
    }, [checked])

    return(
        <div>
            <h1>Status: {status} </h1>
            <button onClick={() => setStatus("Closed")}>Close</button>
            <button onClick={() => setStatus("Back in 5 minutes")}>Break</button>
            <button onClick={() => setStatus("Open")}>Open</button>
            <br />
            <br />
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
            {checked ? 'checked' : 'not checked'}
            <br />
            <input type="checkbox" value={checkedRed} onChange={toggle} />
            {checkedRed ? 'checked using useReducer' : 'not checked using useReducer'}
        </div>
    )
}
