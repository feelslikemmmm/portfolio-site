import { stack } from '@util/stack';
import styled from './styles/description.module.css';
const Fade = require('react-reveal/Fade');

const Description = () => {
  return (
    <Fade bottom>
      <div className={styled.container}>
        {stack.map((item) => (
          <div className={styled.stack__item} key={item.id}>
            <img
              className={styled.stack__images}
              src={item.images}
              alt="stack_images"
            />
            <p className={styled.stack__title}>{item.title}</p>
            <p className={styled.stack__description}>{item.description}</p>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default Description;
