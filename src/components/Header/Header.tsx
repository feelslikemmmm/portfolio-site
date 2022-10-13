import { useState } from 'react';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import Toggle from './components/toggle/Toggle';
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
