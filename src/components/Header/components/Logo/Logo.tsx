import styled from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styled.container}>
      <div className={styled.logo}>
        <a href="#" className={styled.logo_link}>
          feelslikemmmm@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Logo;
