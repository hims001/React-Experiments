import React, { Component } from 'react'

//class component
class Message extends Component{
    getAge = int => {
        return this.props.age
    }

    render(){
        const {color, msg, age} = this.props
        return(
            <div>
                <h1 style={{color: color}}>This is Class component</h1>
                <h2>{msg}</h2>
                <p>My age is {age} years</p>
                <p>My age is {this.getAge()} years</p>
            </div>
        )
    }
}

export default Message