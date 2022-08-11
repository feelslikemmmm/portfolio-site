import React from 'react';
import styled from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styled.contianer}>
      <ul className={styled.menu_list}>
        <li className={styled.menu_item}>
          <a href="#" className={styled.menu_link}>
            프로필
          </a>
        </li>
        <li className={styled.menu_item}>
          <a href="#" className={styled.menu_link}>
            깃허브
          </a>
        </li>
        <li className={styled.menu_item}>
          <a href="#" className={styled.menu_link}>
            블로그
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
