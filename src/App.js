import React, { Component } from 'react'
import Read from './CRUD/Read';
import Create from './CRUD/Create';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


export class App extends Component {
    render() {
        return (
            <Router>
            <div>

                <div>


                </div>
                <Switch>
                <Route exact path="/">
                <Read/>
                </Route>

                <Route exact path ="/create">
                    <Create/>
                </Route>

             </Switch>   
            </div>
            </Router>
        )
    }
}

export default App
