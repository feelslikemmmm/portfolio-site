import styled from './styles/Stack.module.css';
import Title from './Title';
import Description from './Description';

const Stack = () => {
  return (
    <div className={styled.stack}>
      <div className={styled.item__container}>
        <Title />
        <Description />
      </div>
    </div>
  );
};

export default Stack;
