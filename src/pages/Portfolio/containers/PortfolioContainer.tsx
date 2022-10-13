import { ReactNode } from 'react';
import styled from './portfolioContainer.module.css';

const PortfolioContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className={styled.section}>
      <div className={styled.container}>{children}</div>
    </section>
  );
};

export default PortfolioContainer;
