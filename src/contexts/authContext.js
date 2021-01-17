import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { apisignup, apilogin } from "../api/movie-api";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
    }
  };

  const register = async (username, password) => {
    const result = await apisignup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }



  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    }) 

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    isAuthenticated,
    authenticate,
    register,
    login,
    signout,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
