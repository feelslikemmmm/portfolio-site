import { useState } from 'react';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Toggle from './components/Toggle/Toggle';
import HeaderContainer from './containers/HeaderContainer';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderContainer>
      <Logo />
      <Toggle toggle={toggle} setToggle={setToggle} />
      <Menu toggle={toggle} />
    </HeaderContainer>
  );
};

export default Header;
