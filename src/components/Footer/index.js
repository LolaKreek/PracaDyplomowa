import React from 'react';

const Footer = () => {
    return(
        <div className='footer__main-wrapper'>

            <div className='main-wrapper__footer-content'>
                <div className='footer-content__main-header'><h2><a className='footer__main-header__link' href='/'>Quizes</a></h2></div>

                <div className='footer-content__about-group'>
                    <div className='footer-content__themes'><a href='https://github.com/LolaKreek?tab=repositories'>Projects</a></div>
                    <div className='footer-content__about'><a href='https://github.com/LolaKreek'>About</a></div>
                    <div className='footer-content__testimonials'><a data-tooltip='We dont have any testimonials yet &#128523;'>Testimonials</a></div>
                    <div className='footer-content__resources'><a data-tooltip='When creating the site, we used all possible free resources &#129323;'>Resources</a></div>
                </div>

                <div className='footer-content__links-group'>
                    <div className='footer-content__sing-in'><a href='/login'>Sign in</a></div>
                    <div className='footer-content__browse-themes'><p><a className='footer__browse-themes__link' href='https://github.com/LolaKreek?tab=repositories'>Browse repositories</a></p></div>
                </div>
            </div>

            <div className='main-footer__main-content'>
                <div className='main-content__info'>
                    <h4 className='main-content__general_main_header'>A little bit about Quizes</h4>
                    <p className='footer-info__quote'>"The purpose of this site is to help children and adults 
                        to learn and assimilate various kinds of material."</p>

                    <div className='main-content__footer-group'>
                        <p>In inside look</p>
                        <a href='https://github.com/LolaKreek'>About</a>
                        <a href='https://github.com/LolaKreek/PracaDyplomowa/commits/main'>Blog</a>
                        <a href='' data-tooltip='We dont have a transparency reports yet :)'>Transparency Reports</a> 
                    </div>

                    <div className='main-content__footer-group'>
                        <p>Follow us on</p>
                        <a href='https://github.com/LolaKreek'>GitHub</a>
                        <a href='https://www.instagram.com/lolakreek/'>Instagram</a>
                        <a href='https://www.facebook.com/LalitaKlimchuk'>Facebook</a>
                    </div>

                    <div className='main-content__footer-group'>
                        <p>Fine prints</p>
                        <p data-tooltip='We dont have a policy and terms yet &#128522;' className='footer-group__policiesAndTerms'>Policies and Terms</p>
                    </div>
                </div>

                <div className='main-content__overview'>
                    <h4 className='main-content__general_main_header'>Overview</h4>
                    <a href='https://github.com/LolaKreek?tab=repositories'>Projects</a>
                    <a href='' data-tooltip='Only you can get acquainted with this project for free &#10084;'>Pricing</a>
                    <a href='mailto:lalitaklimchuk@gmail.com?subject=Project%20Praca%20Dyplomowa%20(Contact%20us)&body=Your question:%0AEmail%20address%20to%20send%20a%20reply:'>Contact us</a>
                </div>

                <div className='main-content__resources'>
                    <h4 className='main-content__general_main_header'>Resources</h4>
                    <a href='mailto:lalitaklimchuk@gmail.com?subject=Project%20Praca%20Dyplomowa%20(Help%20center)&body=Your question:%0AEmail%20address%20to%20send%20a%20reply:'>Help center</a>
                    <a href='' className='footer__resources__short-tooltip' data-tooltip='Perhaps we will have it &#129300;'>Ebook library</a>
                    <a href='https://github.com/LolaKreek?tab=repositories'>Free projects</a>
                    <a href='' className='footer__resources__short-tooltip' data-tooltip="We dont have any testimonials yet &#128523;">Testimonials</a>
                </div>
            </div>

            <div className='main-content__container-for-copyright-content'>
                <p className='main-content__copyright'>Copyright © 2023 Quizes</p>
                <p className='main-content__copyright'>Lalita Klimchuk</p>
                <p className='main-content__footer-wishes'>Enjoy the rest of your day!</p>
            </div>
        </div>
    );
}

export default Footer;