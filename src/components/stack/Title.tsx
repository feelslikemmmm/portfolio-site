import styled from './styles/title.module.css';

const Title = () => {
  return (
    <div className={styled.container}>
      <h2 className={styled.main}>스택</h2>
      <h2 className={styled.title}>
        제가 프론트엔드 개발에
        <br /> 사용하고 있는 기술이에요
      </h2>
    </div>
  );
};

export default Title;
