import Card from './Card';
import styled from './styles/project.module.css';
import Title from './Title';

const Project = () => {
  return (
    <section className={styled.project}>
      <div className={styled.project__container}>
        <Title />
        <Card />
      </div>
    </section>
  );
};

export default Project;
