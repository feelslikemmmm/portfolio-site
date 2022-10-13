import Career from './components/Career/Career';
import Myself from './components/Myself/Myself';
import Stack from './components/Stack/Stack';
import PortfolioContainer from './containers/PortfolioContainer';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Myself />
      <Stack />
      <Career />
    </PortfolioContainer>
  );
};

export default Portfolio;
