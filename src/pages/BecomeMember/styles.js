import styled from 'styled-components';
import bg from '../../assets/img/be-one-of-us/bg.png';

const itemBorder = {
  fire: 'linear-gradient(to bottom, #982815, #EF7878)',
  air: 'linear-gradient(to bottom, #9ABED8, #EADB9D)',
  earth: 'linear-gradient(to bottom, #982815, #EF7878)',
  aqua: 'linear-gradient(to bottom, #46AA97, #78C9D8)'
};

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

  border-radius: 40px;

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

  > button {
    max-width: 320px;
    width: 100%;

    padding: 17px 0;

    color: #000;

    font-family: "New Farm Medium";
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 7px;

    background-color: white;
    border-radius: 40px;

    margin: 32px auto 0;
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

    > button {
      max-width: 300px;
      padding: 15px 0;

      font-size: 18px;
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

    > button {
      max-width: 250px;
      padding: 7px 0;

      font-size: 15px;
    }
  }

  @media (max-width: 774px) {
    padding: 25px 35px;
  }

  @media (max-width: 512px) {
    padding: 54px 35px;

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

export const Items = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 8px;

  @media (max-width: 862px) {
    row-gap: 16px;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  background: ${(props) => itemBorder[props.type]};
  padding: 1px;

  max-width: 241px;
  width: 25%;
  height: 247px;

  border-radius: 16px;

  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.15);

  position: relative;

  z-index: 3;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 52px;

    border-radius: inherit;

    background-color: #f9f9f9;

    text-align: center;

    height: 100%;

    > img {
      width: 80px;
      height: 80px;
    }

    > h1 {
      color: rgba(0, 0, 0, 0.9);

      font-family: 'New Farm Medium';
      font-size: 20px;

      margin-bottom: 24px;
    }

    > p {
      color: rgba(0, 0, 0, 0.8);

      font-family: 'Wix Madefor Display';
      font-size: 12px;
      font-weight: 500;

      max-width: 137px;
    }
  }

  @media (max-width: 1429px) {
    width: 25%;

    > div {
      padding: 0 25px;

      > img {
        width: 70px;
        height: 70px;
      }

      > h1 {
        font-size: 18px;
      }

      > p {
        font-size: 12px;
        max-width: 137px;
      }
    }
  }

  @media (max-width: 1024px) {
    > div {
      padding: 0 25px;

      > img {
        width: 70px;
        height: 70px;
      }

      > h1 {
        font-size: 18px;
      }

      > p {
        font-size: 12px;
        max-width: 137px;
      }
    }
  }

  @media (max-width: 862px) {
    > div {
      padding: 0 15px;
    }
  }

  @media (max-width: 1024px) {
    width: calc(50% - 16px);

    max-width: 100%;
    min-width: 190px;

    height: 220px;
  }

  @media (max-width: 512px) {
    width: 100%;
  }
`;
