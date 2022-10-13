import Left from './Left';
import Right from './Right';
import styled from './styles/Myself.module.css';
const Fade = require('react-reveal/Fade');

const Myself = () => {
  return (
    <section className={styled.container}>
      <div className={styled.item__container}>
        <Fade bottom>
          <Left />
          <Right />
        </Fade>
      </div>
    </section>
  );
};

export default Myself;
