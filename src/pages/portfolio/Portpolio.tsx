import Career from '@components/career/Career';
import Myself from '@components/myself/Myself';
import Project from '@components/project/Project';
import Stack from '@components/stack/Stack';
import PortfolioContainer from './containers/PortfolioContainer';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Myself />
      <Stack />
      <Career />
      <Project />
    </PortfolioContainer>
  );
};

export default Portfolio;
