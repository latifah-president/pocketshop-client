import React, { useEffect, useState } from "react";
import axios from 'axios';
import firebase from './../firebaseconfig';

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); 
    const [isLoggedIn, setIsLoggedIn] = useState(false)   
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
          if(user) {
              return firebase.auth().currentUser.getIdToken()
              .then(idToken => {
                  //TODO: SET AUTH HEADERS ON AXIOS INSTANCE AND REMOVE TOKEN FROM LOCAL STORAGE
                  localStorage.setItem('token', idToken, )
                  setCurrentUser(user)
                  setIsLoggedIn(true)
              })
              .catch(err => {
                  console.log(err.message)
              })
          }
      });
    }, []);
  
    console.log("current user from context:", currentUser)
    return (
      <AuthContext.Provider
        value={{
          currentUser,
          isLoggedIn
        }}
      >
          {children} 
      </AuthContext.Provider>
    );
  };