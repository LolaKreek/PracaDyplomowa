import React from 'react';
import components from '../../components';


//Main page in this project
const Homepage = () => {
  //Import of required components
  const {Menu, Footer} = components;
  
  return (
    <div className="main-wrapper">
        <Menu />
        <h1 className='main-header'>Strona Główna</h1>

        <div className='main-wrapper__main-content-container'>
          <div className='main-content-container__main-category-container'>
            <h3 className='main-category-container__header'>Wybierz kategorię</h3>
          </div>

          <div className='main-content-container__main-top-container'>
            <h3 className='main-top-container__header'>Top użytkowników</h3>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Homepage;