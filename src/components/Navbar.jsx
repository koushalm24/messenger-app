import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../Firebase'
import { AuthContext } from '../context/Authcontext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  const logout = (auth) => {
    signOut(auth);
  }
  return (
    <div className="navbar">
      <span className="logo">Chit Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => logout(auth)} >Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
