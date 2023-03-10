import React, { useState } from 'react';
import components from '../index';

//Creating a part "Menu"
const Menu = ({component}) => {
    // //Import of required components
    const {Print, List} = components;
    let menuList;

    if(component == "/registration"){
        menuList = { list: [
            {id: 1, href: '/', text: 'Strona Główna'},
            {id: 2, href: '/quiz', text: 'Quiz'},
            {id: 3, href: '/instruction', text: 'Instrukcja'},
            {id: 4, href: '/profile', text: 'Profil'},
            {id: 6, href: '/registration', text: 'Zarejestruj się'}
        ]}
    }else{
        menuList = { list: [
            {id: 1, href: '/', text: 'Strona Główna'},
            {id: 2, href: '/quiz', text: 'Quiz'},
            {id: 3, href: '/instruction', text: 'Instrukcja'},
            {id: 4, href: '/profile', text: 'Profil'},
            {id: 5, href: '/login', text: 'Zaloguj się'}
        ]}
    }

    // const menuList = { list: [
    //     {id: 1, href: '/', text: 'Strona Główna'},
    //     {id: 2, href: '/quiz', text: 'Quiz'},
    //     {id: 3, href: '/instruction', text: 'Instrukcja'},
    //     {id: 4, href: '/profile', text: 'Profil'},
    //     {id: 5, href: '/login', text: 'Zaloguj się'},
    //     {id: 6, href: '/registration', text: 'Zarejestruj się'}
    // ]}

    

    return(
        <nav className="main-wrapper__menu menu">
            <div className="general">
                <div className="menu__container-initials">
                    <Print component='p' class='menu__initials' text='L.K.' />
                </div>

                <div className="menu__container-list">
                    <List class='menu__list list' currentPage={component} element='a' lists={menuList} />
                </div>
            </div>
        </nav>
    );
}

export default Menu;