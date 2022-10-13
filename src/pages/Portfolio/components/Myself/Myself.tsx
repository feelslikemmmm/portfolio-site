import Left from './Left';
import Right from './Right';
import styled from './styles/Myself.module.css';
const Myself = () => {
  return (
    <section className={styled.container}>
      <div className={styled.item__container}>
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default Myself;
