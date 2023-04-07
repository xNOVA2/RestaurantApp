import React, { useState } from 'react'
import './SignIn.css'
import {Link} from 'react-router-dom'
export default function SignIn() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div className="login">
        <div className="form">
          <h2>Welcome</h2>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        
          <Link to='/Home'>   <input type="submit" value="Sign In" className="submit"/></Link>
        </div>
      </div>
    )
}
