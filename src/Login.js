import React,{useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import {auth} from "./firebase";
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //it successfully created a new user with email and password
                
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // //firebase register
    }
    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login__logo"
                     src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
                    alt="amazon logo"
                 />
             </Link>
             <div className=" login__container">
                 <h1>Sign In</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type="text" value={email} onChange={e =>setEmail(e.target.value)}/>

                     <h5>Password</h5>
                     <input type="password" value={password} onChange={e =>setPassword(e.target.value)}/>

                     <button type='submit' onClick={signIn}className="login__signInButton" >Sign In</button>
                 </form>
                 <p>by signing in you agree the terms and conditions of use & sale.</p>

                 <button onClick={register}className="login__resgisterButton">Create Your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login
