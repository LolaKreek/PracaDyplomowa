import React from 'react';

const Footer = () => {
    return(
        <div className='footer__main-wrapper'>

            <div className='main-wrapper__footer-content'>
                <div className='footer-content__main-header'><h2>Quizes</h2></div>

                <div className='footer-content__about-group'>
                    <div className='footer-content__themes'><a>Themes</a></div>
                    <div className='footer-content__about'><a>About</a></div>
                    <div className='footer-content__testimonials'><a>Testimonials</a></div>
                    <div className='footer-content__resources'><a>Resources</a></div>
                </div>

                <div className='footer-content__links-group'>
                    <div className='footer-content__sing-in'><a href='/login'>Sign in</a></div>
                    <div className='footer-content__browse-themes'><p>Browse themes</p></div>
                </div>
            </div>

            <div className='main-footer__main-content'>
                <div className='main-content__info'>
                    <h4 className='main-content__general_main_header'>A little bit about Quizes</h4>
                    <p className='footer-info__quote'>"The purpose of this site is to help children and adults 
                        to learn and assimilate various kinds of material."</p>

                    <div className='main-content__footer-group'>
                        <p>In inside look</p>
                        <a href=''>About</a>
                        <a href=''>Blog</a>
                        <a href=''>Transparency Reports</a> 
                    </div>

                    <div className='main-content__footer-group'>
                        <p>Follow us on</p>
                        <a href=''>GitHub</a>
                        <a href=''>Instagram</a>
                        <a href=''>Facebook</a>
                    </div>

                    <div className='main-content__footer-group'>
                        <p>Fine prints</p>
                        <a href=''>Policies and Terms</a>
                    </div>
                </div>

                <div className='main-content__overview'>
                    <h4 className='main-content__general_main_header'>Overview</h4>
                    <a href=''>Themes</a>
                    <a href=''>Pricing</a>
                    <a href=''>Services</a>
                    <a href=''>Contact us</a>
                </div>

                <div className='main-content__resources'>
                    <h4 className='main-content__general_main_header'>Resources</h4>
                    <a href=''>Help center</a>
                    <a href=''>Ebook library</a>
                    <a href=''>Free themes</a>
                    <a href=''>Affiliates</a>
                    <a href=''>Testimonials</a>
                </div>
            </div>

            <div>
                <p className='main-content__copyright'>Copyright © 2023 Quizes</p>
                <p className='main-content__copyright'>Lalita Klimchuk</p>
                <p className='main-content__footer-wishes'>Enjoy the rest of your day!</p>
            </div>
        </div>
    );
}

export default Footer;