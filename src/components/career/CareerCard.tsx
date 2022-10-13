import { workExperience } from '@util/work';
import CareerCardItem from './CareerCardItem';
import styled from './styles/careerCard.module.css';
const CareerCard = () => {
  return (
    <div className={styled.card}>
      {workExperience.map((work) => (
        <CareerCardItem key={work.id} work={work} />
      ))}
    </div>
  );
};
export default CareerCard;
