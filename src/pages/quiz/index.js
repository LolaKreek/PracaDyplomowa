import React from 'react';
import components from '../../components';


//Main page in this project
const Quiz = () => {
  //Import of required components
  const {Menu, Footer} = components;
  
  return (
    <div className="main-wrapper">
        <Menu component='/quiz' />
        <h1 className='main-header'>Quiz</h1>
        <Footer />
    </div>
  );
}

export default Quiz;