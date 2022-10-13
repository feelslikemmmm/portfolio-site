import styled from './Toggle.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
interface ToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ({ toggle, setToggle }: ToggleProps) => {
  return (
    <>
      <button className={styled.toggle_btn} onClick={() => setToggle(!toggle)}>
        <GiHamburgerMenu />
      </button>
    </>
  );
};

export default Toggle;
