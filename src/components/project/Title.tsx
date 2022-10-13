import styled from './styles/title.module.css';

const Title = () => {
  return (
    <div className={styled.container}>
      <h2 className={styled.main}>프로젝트</h2>
      <h2 className={styled.title}>저의 개인 작업물을 소개할게요</h2>
    </div>
  );
};

export default Title;
