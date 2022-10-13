import styled from './menu.module.css';

interface MenuProps {
  toggle: boolean;
}

const Menu = ({ toggle }: MenuProps) => {
  return (
    <ul
      className={toggle ? `${styled.mobile_menu_list}` : `${styled.menu_list}`}
    >
      <li className={styled.menu_item}>
        <a
          href="https://www.linkedin.com/in/%EB%82%99%EC%9B%90-%EC%A0%84-900951204/"
          target="blank"
          rel="noopener noreferrer"
          className={styled.menu_link}
        >
          링크드인
        </a>
      </li>
      <li className={styled.menu_item}>
        <a
          href="https://github.com/feelslikemmmm"
          className={styled.menu_link}
          target="blank"
          rel="noopener noreferrer"
        >
          깃허브
        </a>
      </li>
      <li className={styled.menu_item}>
        <a
          href="https://medium.com/feelslikemmmm"
          className={styled.menu_link}
          target="blank"
          rel="noopener noreferrer"
        >
          블로그
        </a>
      </li>
    </ul>
  );
};

export default Menu;
