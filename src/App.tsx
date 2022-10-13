import Header from '@components/header/Header';
import Portfolio from '@pages/portfolio/Portpolio';
import styled from '@styles/App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className={styled.container}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
