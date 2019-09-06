import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Bins from './Bins'

class App extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        userId:''
    }
    render(){
        return(
            <main>
                <Switch>
                    <Route render={()=>{return<Bins/>}}/>
                </Switch>
            </main>
        )
    }
}



export default App;
