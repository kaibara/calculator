import React, { Component } from 'react'
import firebase from './firebase'

class Auth extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  logout() {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="Auth">
	<h1>開発中止中</h1>
      {this.state.user ? (
        <h1 className="UserName">{this.state.user && this.state.user.displayName}の家計簿</h1>
      ) : (
        <h1 className="Name">あなたの家計簿</h1>
      )}
      {this.state.user ? (
        <button onClick={this.logout}>Google Logout</button>
      ) : (
         <button onClick={this.login}>Google Login</button>
      )}
      </div>
    )
  }
}

export default Auth
