import styled from './styles/stack.module.css';
import Title from './Title';
import Description from './Description';

const Stack = () => {
  return (
    <section className={styled.stack}>
      <div className={styled.item__container}>
        <Title />
        <Description />
      </div>
    </section>
  );
};

export default Stack;
