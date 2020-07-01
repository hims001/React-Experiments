import React from 'react'

//Function component
export const FuncComponent = ({age,color,msg}) => {
    return(
       <>
        <h1 style={{color:color}}>This is functional component</h1>
        <h2>{msg}</h2>
        <p>My age is {age} years</p>
       </>
    )
}