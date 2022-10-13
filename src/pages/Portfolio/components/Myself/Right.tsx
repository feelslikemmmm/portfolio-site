import styled from './styles/Myself.module.css';
import MainImage from '../../../../assets/images/main.png';
const Right = () => {
  return (
    <div className={styled.right}>
      <img src={MainImage} alt="main" />
    </div>
  );
};

export default Right;
