import React, { Component } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../constants/routes'

const SignIn = (props) => (
  <div>
    <SignInForm signIn={props.signIn} />
    <SignUpLink />
  </div>
)

class SignInFormBase extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, password } = this.state
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => 
        
        this.props.history.push(ROUTES.ITEMS)
      )
      .catch(error => {
        this.setState({error})
      })
    this.props.signIn(this.props.firebase.auth.W) 
  }

  onChange = event => 
    this.setState({ [event.target.name] : event.target.value})

  render() {
    const { email, password, error } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name='email'
          type='text'
          value={email}
          onChange={this.onChange}
          placeholder='Email Address'
        />

        <input 
          name='password'
          type='password'
          value={password}
          onChange={this.onChange}
          placeholder='Password'
        />
        <button type='submit'>sign in</button>
        {error && error.message}
      </form>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase))

const SignUpLink = () => (
  <p>
    Don't have an account? <NavLink exact to={ROUTES.SIGN_UP}>Sign Up</NavLink>
  </p>
)

export default SignIn
