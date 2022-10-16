import styled from './styles/Myself.module.css';

const Left = () => {
  return (
    <div className={styled.left}>
      <h2 className={styled.title}>
        안녕하세요 <br />
        프론트엔드 개발자 <br />
        전낙원 입니다
      </h2>
      <h2 className={styled.description}>
        개발을 통해 많은 변화를 만들 수 있다고 생각합니다, <br />
        이로운 변화를 만들 수 있도록 노력하는 개발자 입니다.
        <br />
        제가 걸어온 여정을 소개해드릴게요.
      </h2>
    </div>
  );
};

export default Left;
