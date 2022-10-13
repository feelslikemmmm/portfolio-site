import styled from './styles/card.module.css';
import { projects } from '@util/projects';
import CardItem from '@components/project/CardItem';
const Card = () => {
  return (
    <div className={styled.card}>
      {projects.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Card;
