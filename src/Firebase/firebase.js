import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   databaseURL: process.env.REACT_APP_DATABASEURL,
   projectId: process.env.REACT_APP_PROJECTID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
}

firebase.initializeApp(config);

export default firebase