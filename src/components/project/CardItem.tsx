import styled from './styles/card.module.css';
const Fade = require('react-reveal/Fade');

const CardItem = ({ item }: any) => {
  return (
    <>
      {item.keys === 'left' ? (
        <>
          <Fade left>
            <div className={styled.card__item}>
              <p className={styled.card__main}>{item.main}</p>
              <p className={styled.card__title}>{item.title}</p>
              <p className={styled.card__description}>{item.front}</p>
              <p className={styled.card__description}>{item.back}</p>
              <p className={styled.card__description}>{item.deploy}</p>
              <p className={styled.card__description}>{item.role}</p>
              <div className={styled.card__links}>
                <a href={item.git} target="blank" rel="noopener noreferrer">
                  GITHUB
                </a>
                <a href={item.src} target="blank" rel="noopener noreferrer">
                  WEB SITE
                </a>
              </div>
            </div>
            <img
              className={styled.card__images}
              src={item.images}
              alt="card-maker"
            />
          </Fade>
        </>
      ) : (
        <>
          <Fade right>
            <img
              className={styled.card__images}
              src={item.images}
              alt="card-maker"
            />
            <div className={styled.card__item}>
              <p className={styled.card__main}>{item.main}</p>
              <p className={styled.card__title}>{item.title}</p>
              <p className={styled.card__description}>{item.front}</p>
              <p className={styled.card__description}>{item.back}</p>
              <p className={styled.card__description}>{item.deploy}</p>
              <p className={styled.card__description}>{item.role}</p>
              <div className={styled.card__links}>
                <a href={item.git} target="blank" rel="noopener noreferrer">
                  GITHUB
                </a>
                <a href={item.src} target="blank" rel="noopener noreferrer">
                  WEB SITE
                </a>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default CardItem;
