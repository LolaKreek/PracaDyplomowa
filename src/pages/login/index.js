import React from 'react';
import components from '../../components';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import google from '../../images/google.png';

const Login = () => {
    const {Menu} = components;

    return(
        <div className='login__main-wrapper'>
            <Menu component='/login' />
            <h1 className='main-wrapper__main-header'>Strona do logowania</h1>

            <div className='main-wrapper__form-container'>
                <form className='form-container__form'>
                    <div className='form__main-headers'>
                        <h2 className='form__main-header'>Podaj dane, żeby zalogować się</h2>
                        <p className='form__second-header'>Logowanie użytkownika</p>
                    </div>
                    
                    <div className='form__input-container'>
                        <input className='input-user-name' type='text' placeholder='Podaj nazwę użytkownika' />
                        <input className='input-password' type='password' placeholder='Podaj hasło' />
                        <p className='forget-password'>Zpomniałeś hasło?</p>
                        <input className='input-submit' type='submit' value='Zaloguj się' />
                    </div>

                    <p className='form__others-logins-header'>Lub zalogiuj się za pomocą</p>

                    <div className='main-wrapper__others-logins'>
                        <img className='others-logins__icon' src={facebook} alt='Facebook' />
                        <img className='others-logins__icon' src={twitter} alt='Twitter' />
                        <img className='others-logins__icon' src={google} alt='Google' />
                    </div>

                    <div className='main-wrapper__registration-container'>
                        <p className='registration-container__link'>Zarejestruj się</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;