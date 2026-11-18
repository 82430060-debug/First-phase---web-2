import React from "react";
import '../Styles/LoginBox.css';
import pic from '../Assets/pic.png';
import LoginNavBar from '../Components/LoginBoxNavBar';
import {Link} from 'react-router-dom'

function LoginBox({ setIsLoggedIn }){
return(
<div className="login-box">
    <div className="login-box__visual"><img src={pic} alt='Not found'></img> </div>
    <div className="login-box__content">
        <Link to ='/Signup' className="login-box__signup">Sign up</Link>
        <h1 className="login-box__title">Welcome to italki!</h1>
        <span className="login-box__terms">By Logging in or creating an account, you agree to 
            italki's<strong> Terms of service</strong> and <strong>Privacy Policy</strong> 
        </span>
   <LoginNavBar setIsLoggedIn={setIsLoggedIn}/>
    </div>
</div>
);
}
export default LoginBox;