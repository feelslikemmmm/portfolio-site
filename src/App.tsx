import Header from '@components/header/Header';
import Portfolio from '@pages/portfolio/Portpolio';
import styled from '@styles/App.module.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className={styled.container}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
