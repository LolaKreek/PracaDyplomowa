import React from 'react';
import components from '../../components';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import google from '../../images/google.png';

const Registration = () => {
    const {Menu} = components;

    return(
        <div>
            <Menu component='/registration' />
            <h1 className='main-wrapper__main-header'>Strona do rejestracji</h1>

            <div className='main-wrapper__form-container'>
                <form className='form-container__form'>
                    <div className='form__main-headers'>
                        <h2 className='form__main-header'>Podaj dane, żeby zarejestrować się</h2>
                        <p className='form__second-header'>Rejestracja użytkownika</p>
                    </div>
                    
                    <div className='form__input-container'>
                        <input className='input-user-name' type='text' placeholder='Podaj nazwę użytkownika' />
                        <input className='input-user-email' type='email' placeholder='Podaj email' />
                        <input className='input-user-number' type='number' placeholder='Podaj swój wiek' />
                        <input className='input-user-number' type='number' placeholder='Podaj swój telefon' />
                        <input className='input-password' type='password' placeholder='Podaj hasło' />
                        <input className='input-password' type='password' placeholder='Podaj hasło ponownie' />
                        <input className='input-submit' type='submit' value='Zarejestruj się' />
                    </div>

                    <p className='form__others-logins-header'>Lub zarejestruj się za pomocą</p>

                    <div className='main-wrapper__others-logins'>
                        <img className='others-logins__icon' src={facebook} alt='Facebook' />
                        <img className='others-logins__icon' src={twitter} alt='Twitter' />
                        <img className='others-logins__icon' src={google} alt='Google' />
                    </div>

                    <div className='main-wrapper__registration-container'>
                        <a href='/login' className='registration-container__link'>Zaloguj się</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;