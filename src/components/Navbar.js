import React from 'react';

function NavBar() {
  return (
    <>
      <div className="welcome">
        WELCOME TO KAKAMEGA RAIN FOREST 
      <div className='logo'><img className="logoImg" src={ require('./assets/logoImg.png')} alt="logo" /></div>
      </div> 
    </>
  );
}

export default NavBar;