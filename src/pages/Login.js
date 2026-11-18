import React from 'react';
import '../Styles/Login.css';
import LoginBox from '../Components/LoginBox';
function Login({ setIsLoggedIn }) {
return(
<div className='page'>
    <div className='page__frame'>
        <LoginBox setIsLoggedIn={setIsLoggedIn}/>

    </div>

</div>
);
}
export default Login;