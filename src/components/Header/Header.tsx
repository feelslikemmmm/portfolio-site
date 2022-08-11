import React from 'react';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import HeaderContainer from './containers/HeaderContainer';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  );
};

export default Header;
