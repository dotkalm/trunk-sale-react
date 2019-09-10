import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../constants/routes'
//import cryptoRandmString from 'crypto-random-string'

const SignUp = (props) => {
  return (
    <div>
      <h1>Signup</h1>
        <SignUpForm sqlUser={props.sqlUser}/>
    </div>
  )
}

class SignUpFormBase extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    uid: '',
    error: null
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state
    event.preventDefault()
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
          this.setState({
              uid: authUser.user.uid
          })
        return this.props.firebase.db.collection('users').doc(authUser.user.uid).set({
          username,
          email
        })
      })
      .then(() =>  {
        const cryptoRandomString = require('crypto-random-string')
        this.props.history.push(ROUTES.ITEMS)
        this.props.sqlUser({
            username: this.state.username,
            uid: this.state.uid,
            id: +cryptoRandomString({length: 10, characters: '1234567890'})
        })
      })
      .catch(error => {
        this.setState({error})
      })
  }

  onChange = event => {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  render() {
      
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state
    
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button type='submit' disabled={isInvalid}>Sign Up</button>
        {error && error.message}
      </form>
    )
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase))



export default SignUp
