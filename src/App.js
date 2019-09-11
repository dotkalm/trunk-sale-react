import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Items from './Items'
import * as ROUTES from './constants/routes'
import Bins from './Bins'
import SignUp from './SignUp'

class App extends Component {
    state = {
        username: '',
        email: '',
        uid:'',
        userId: 0,
    }

    signIn= async (uid) => {
        try{
            const logResponse = await fetch(`${
                process.env.REACT_APP_BACKEND_URL}/user/logIn/`, {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(uid),
                    headers: {
                      'Content-Type': 'application/json'
                    }
            })
            const response = await logResponse.json()
            this.setState({
                username: response.data[0]['username'],
                userId: response.data[0]['id'],
                uid: uid,
            })
        } catch(err){
            console.log(err)
           }
    }
    sqlUser = async (data) => {
        try{
                const registerResponse = await fetch(`${
                process.env.REACT_APP_BACKEND_URL
                }/user/register/`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            const response = await registerResponse.json()
            this.setState({
                uid: data.uid,
                username: data.username,
                userId: response.data.id,
            })

        } catch(err){
            console.log(err)
        }

    }
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path={ROUTES.SIGN_UP} render={(props) =>{
                        return<SignUp sqlUser={this.sqlUser}/>}}/>
                    <Route exact path={ROUTES.ITEMS} render={(props)=>{
                        return<Items uid={this.state.uid} 
                        username={this.state.username}
                        userId={this.state.userId}
                        signIn={this.signIn}/>}}/>
                    <Route exact path={ROUTES.BINS} 
                        render={()=>{return<Bins uid={this.state.uid}/>}}/>
                </Switch>
            </main>
        )
    }
}



export default App;
