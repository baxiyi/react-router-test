import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

function App(props){
    return (
        <div>
            <ul>
                <li><Link to='/'>Index</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/message">Message</Link></li>
            </ul>
            <h1>App</h1>
        </div>
    )
}
function About(props){
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

function Message(props){
    return (
        <div>
           <h2>Message</h2>
        </div>
    )
}

function eachMessage(props){
    return (
        <div>
            <h3>{props.match.params.id}</h3>
        </div>
    )
}

const routes=(
    <Router>
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route exact path="/message" component={Message}></Route>
            <Route path="/message/:id" component={eachMessage}></Route>
        </Switch>
    </Router>
)

export default routes;