import React from 'react';
import '../Styles/LoginBox.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import { checkUser } from '../Data/Data';
 
function LoginBoxNavBar({ setIsLoggedIn }) {
    const [activeTab, setActiveTab] = useState('email');
    const [inputValue, setInputValue] = useState('');   //password
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
   
    function setTrueLogin(){
        setIsLoggedIn(true);
    }
    function CheckNumber() {
        if (number === '03789945') {
            return true;
        }
        return false;
    }
 

    const isValid =
    (
        activeTab === 'email' && checkUser(email, inputValue)
    ) ||
    (
        activeTab === 'phone' && CheckNumber()
    );
 
  
    function ShowError() {
        setMessage('Wrong credentials!');
    }
 
    return (
        <div className="login-box__form">
 
            <div className="login-box__tabs" role="tablist">
 
                <div
                    className={activeTab === 'email' ? 'login-box__tab is-active' : 'login-box__tab'}
                    onClick={() => setActiveTab('email')}
                >
                    Email
                </div>
 
                <div
                    className={activeTab === 'phone' ? 'login-box__tab is-active' : 'login-box__tab'}
                    onClick={() => setActiveTab('phone')}
                >
                    Phone
                </div>
 
            </div>
 
            {activeTab === 'email' && (
                <>
                    <label className="login-box__label">
                        Email address
                    </label>
 
                    <div className="login-box__field">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-box__input"
                            type="email"
                            placeholder="Enter email"
                        />
                    </div>
                </>
            )}
 
            {activeTab === 'phone' && (
                <>
                    <label className="login-box__label">
                        Phone number
                    </label>
 
                    <div className="login-box__field">
                        <input
                            onChange={(e) => setNumber(e.target.value)}
                            className="login-box__input"
                            type="tel"
                            placeholder="Enter phone number"
                        />
                    </div>
                </>
            )}
 
            <label className="login-box__label">
                Password
            </label>
 
            <div className="login-box__field">
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    className="login-box__input"
                    type="password"
                    placeholder="Enter password"
                />
            </div>
 
            {isValid ? (
                <Link to="/Dashboard" className="login-box__submit" onClick={setTrueLogin}>
                    Login        
                </Link>
            ) : (
                <button className="login-box__submit" onClick={ShowError}>
                    Log in
                </button>
            )}
 
            <p>{message}</p>
 
            <div className="login-box__social">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="login-box__social-btn"><InstagramIcon /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="login-box__social-btn"><FacebookIcon /></a>
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="login-box__social-btn"><AppleIcon /></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="login-box__social-btn"><TwitterIcon /></a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="login-box__social-btn"><WhatsappIcon /></a>
            </div>
 
        </div>
    );
}
 
export default LoginBoxNavBar;
 