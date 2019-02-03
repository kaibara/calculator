import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
   apiKey: "AIzaSyBWx4XW1s0Y4UgDneZL8V0ZFYr1Sc4YKvk",
   authDomain: "myself-calculator.firebaseapp.com",
   databaseURL: "https://myself-calculator.firebaseio.com",
   projectId: "projectId",
   storageBucket: "myself-calculator.appspot.com",
   messagingSenderId: "1043096824390"
}

firebase.initializeApp(config);

export default firebase
