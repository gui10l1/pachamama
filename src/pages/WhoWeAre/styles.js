import styled from 'styled-components';
import bg from '../../assets/img/be-one-of-us/bg.png';

export const Container = styled.div`
  background-image: url(${bg}), linear-gradient(#9ABED8, #EADB9D);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;

  z-index: 1;
`;

export const Overlay = styled.div`
  background-color: #00000040;

  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;
`;

export const Content = styled.div`
  position: relative;

  padding-top: 92px;

  z-index: 3;
`;

export const SectionOne = styled.section`
  margin-top: 120px;
  margin-bottom: 140px;

  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media (max-width: 512px) {
    margin-top: 0;
    margin-bottom: 60px;
  }
`;

export const Card = styled.div`
  background-color: #0000001A;
  backdrop-filter: blur(1px);

  padding: 75px 85px;

  max-width: 70%;

  margin: 0 auto;

  position: relative;

  > h1 {
    color: #FFF;

    text-align: center;
    font-family: "New Farm Bold";
    font-size: 56px;

    margin-bottom: 26px;
  }

  > p {
    color: #FFF;

    text-align: center;
    font-family: "Wix Madefor Display";
    font-size: 17px;
    font-weight: 400;

    margin: 0 auto 60px;

    max-width: 80%;
  }

  > img {
    position: absolute;

    &:nth-child(1) {
      top: 0;
      right: 0;
    }

    &:nth-last-child(1) {
      bottom: 0;
      left: 0;
    }
  }

  @media (max-width: 1429px) {
    max-width: 80%;
    padding: 55px 65px;

    > h1 {
      font-size: 42px;
      margin-bottom: 20px;
    }

    > p {
      font-size: 15px;
      margin: 0 auto 40px;
      max-width: 90%;
    }

    > img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 1024px) {
    padding: 35px 55px;

    > h1 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    > p {
      font-size: 15px;
      margin: 0 auto 20px;
      max-width: 100%;
    }

    > img {
      width: 45px;
      height: 45px;

      &:nth-child(1) {
        top: 8px;
        right: 8px;
      }

      &:nth-last-child(1) {
        bottom: 8px;
        left: 8px;
      }
    }
  }

  @media (max-width: 774px) {
    padding: 25px 50px;
  }

  @media (max-width: 512px) {
    padding: 45px 20px 55px;

    > h1 {
      font-size: 28px;
      margin-bottom: 8px;
    }

    > p {
      font-size: 15px;
      margin: 0 auto 16px;
    }
  }
`;

export const AboutUs = styled.div`
  border-radius: 10px;
  border: 3px solid ${props => props.color};

  background: rgba(255, 255, 255, 0.68);

  padding: 40px 32px;

  & + div {
    margin-top: 50px;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    margin-bottom: 40px;

    > img {
      width: 51px;
      height: 51px;
    }

    > h1 {
      color: ${props => props.color};
      text-align: center;
      font-family: "New Farm Bold";
      font-size: 40px;
    }
  }

  > main {
    > p + p {
      margin-top: 30px;
    }

    > p {
      color: #000;

      font-family: "Wix Madefor Display";
      font-size: 20px;
      font-weight: 400;
      text-align: left;

      > strong {
        color: #000;
        font-family: "Wix Madefor Display";
        font-size: inherit;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 1429px) {
    > header {
      > img {
        width: 43px;
        height: 43px;
      }

      > h1 {
        font-size: 32px;
      }
    }

    > main {
      > p {
        font-size: 18px;
      }
    }
  }
  
  @media (max-width: 1024px) {
    > header {
      margin-bottom: 25px;

      gap: 2px;

      > img {
        width: 39px;
        height: 39px;
      }

      > h1 {
        font-size: 28px;
      }
    }

    > main {
      > p + p {
        margin-top: 20px;
      }
      
      > p {
        font-size: 16px;
      }
    }
  }
  
  @media (max-width: 512px) {
    border-width: 2px;

    > header {
      margin-bottom: 16px;

      > img {
        width: 33px;
        height: 33px;
      }

      > h1 {
        font-size: 22px;
      }
    }

    > main {
      > p + p {
        margin-top: 8px;
      }

      > p {
        font-size: 13px;

        text-align: justify;
      }
    }
  }
`;
