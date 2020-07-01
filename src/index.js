import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Library from './Library'
import { FuncComponent } from './FuncComponent'
import Message from './Message'
import { App } from './App'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const style={
    backgroundColor: 'green',
    color: 'red',
    fontFamily: 'Arial'
}
//const title = React.createElement(
//    'h1',
//    {id: 'h1', style: style},
//    'Hello Hims'
//)

//const FuncComponent = (props) => {
//    return(
//       <div>
//        <h2 style={{color:props.color}}>This is functional component</h2>
//        <h3>{props.msg}</h3>
//        <p>My age is {props.age} years</p>
//       </div>
//    )
//}

let BooksList = [
    {title:'Book1', author:'Hims1', pages:100},
    {title:'Book2', author:'Hims2', pages:200},
    {title:'Book3', author:'Hims3', pages:300}
]

function Greet(){
    return <pre> I     am      a       PRE     element</pre>
}

function GitHubUser({login}){
    const [data, setData] = useState(null)
    const url = "https://api.github.com/users/" + login
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    }, [url])

    if(data){
        return(
            <div>
                <h2>GitHub Login ID: {data.login}</h2>
                <h3>Name: {data.name}</h3>
                <img src={data.avatar_url} alt={data.login} width={100} />
            </div>
        )
    }
    return null
}

function GitHubData(){
    return <GitHubUser login="hims001" />
}

render(
    <>
        <Router>
            <Link to="/App">Home</Link>
            <br />
            <Link to="/GitHubData">GitHub Details</Link>
            {/*<Greet />
            <hr />
            <h2 style={style}>Hello hims</h2>
            <hr />
            <Message color="blue" msg="Hello Hims" age={50}/>
            <hr />
            <FuncComponent color="blue" msg="Hello Hims" age={50}/>
            <hr />
            <Library books={BooksList}/>
            <hr />
             <App />
            <hr />
            <GitHubData /> */}
            <Switch>
                <Route exact path="/App" component={App} />
                <Route path="/GitHubData" component={GitHubData} />
                <Route render={() => {
                    return (<h1 style={{color:"red"}}>Whoa...Whoa...I think you are Lost!</h1>)
                }} />
            </Switch>
        </Router>
    </>,
   document.getElementById('root')
)