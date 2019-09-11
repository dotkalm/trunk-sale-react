import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyD_ifwft2MI_ybwEIUgMIiPAb-Cbcrm9gA",
    authDomain: "notes-appa.firebaseapp.com",
    databaseURL: "https://notes-appa.firebaseio.com",
    projectId: "notes-appa",
    storageBucket: "notes-appa.appspot.com",
    messagingSenderId: "643153747485",
    appId: "1:643153747485:web:8d26fb539a59de28"
};
class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }
  doCreateUserWithEmailAndPassword = (email, password) => {
    return  this.auth.createUserWithEmailAndPassword(email, password)
  }
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
  
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password)
  user = uid => this.db.ref(`users/${uid}`)
  users = () => this.db.ref('users')
}
export default Firebase

