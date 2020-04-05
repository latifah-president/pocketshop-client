import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.envREACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

  firebase.initializeApp(config);
  
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


export {
    googleProvider, auth, storage, firebase as default
}