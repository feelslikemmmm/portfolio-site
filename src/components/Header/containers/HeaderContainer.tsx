import { ReactNode } from 'react';
import styled from './headerContainer.module.css';
const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <header className={styled.header}>
      <div className={styled.container}>
        <div className={styled.inner_container}>{children}</div>
      </div>
    </header>
  );
};

export default HeaderContainer;
