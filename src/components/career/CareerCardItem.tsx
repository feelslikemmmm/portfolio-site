import styled from './styles/careerCardItem.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
interface CardItemProps {
  id: number;
  title: string;
  url: string;
  images: any;
  description: string[];
}

const CareerCardItem = ({ work }: { work: CardItemProps }) => {
  const { title, description, images } = work;
  return (
    <div className={styled.card_item}>
      <div className={styled.card_item_box}>
        {/* <div className={styled.images}></div> */}
        {/* <p className={styled.url}>
          서비스 URL : <a href="#">{url}</a>
        </p> */}
        <p className={styled.title}>{title}</p>
        <div className={styled.icon}>
          <span>
            <AiOutlinePlusCircle />
          </span>
        </div>
        {description.map((desc, i) => (
          <p className={styled.description} key={i}>
            {desc}
          </p>
        ))}
        <img className={styled.image} src={images} alt="work_images" />
      </div>
    </div>
  );
};

export default CareerCardItem;
