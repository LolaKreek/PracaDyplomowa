import React from 'react';
import components from '../../components';


//Main page in this project
const Instruction = () => {
  //Import of required components
  const {Menu , Footer} = components;
  
  return (
    <div className="main-wrapper">
        <Menu />
        <h1 className='main-header'>Instrukcja</h1>
        <Footer />
    </div>
  );
}

export default Instruction;