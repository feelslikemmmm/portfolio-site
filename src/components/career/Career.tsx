import CareerCard from './CareerCard';
import styled from './styles/career.module.css';

const Career = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item__container}>
        <div className={styled.introduce}>
          <h2 className={styled.main}>경험</h2>
          <p className={styled.title}>저는 이런 업무를 경험했어요</p>
          <p className={styled.description}>
            미디어 커머스 쇼핑 앱 포크 쇼핑을 운영하는 포크홀딩스에서 프론트엔드
            개발자로 재직했어요
            <br />
            주로 포크 쇼핑 앱내 웹뷰 개발과 백 오피스 개발 및 유지보수를
            담당했어요
          </p>
        </div>
        <CareerCard />
      </div>
    </div>
  );
};

export default Career;
