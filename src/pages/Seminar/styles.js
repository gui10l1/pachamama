import styled, { css } from 'styled-components';
import seminarBg from '../../assets/img/seminar/bg.png';

export const Container = styled.div`
  background-image: url(${seminarBg}), linear-gradient(#46aa97, #78c9d8);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding-top: 92px;

  .carousel {
    margin-top: 40px;
  }

  @media (max-width: 1316px) {
    > section:not(section:nth-child(2)) {
      padding: 0 80px;
      margin-top: 50px;
      margin-bottom: 100px;

      > main {
        > strong {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 1022px) {
    > section:not(section:nth-child(2)) {
      padding: 0 40px;
      margin-top: 30px;
      margin-bottom: 75px;
    }

    .carousel {
      margin-top: 20px;
    }
  }

  @media (max-width: 574px) {
    padding-top: 60px;

    > section:not(section:nth-child(2)) {
      padding: 0 20px;
    }
  }

  @media (max-width: 464px) {
    .carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SectionOne = styled.section`
  padding: 0 124px;
  margin-top: 64px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      > img {
        max-width: 100%;
        height: auto;
      }

      > h1 {
        color: #fff;

        font-family: 'New Farm Bold';
        font-size: 40px;
      }
    }

    > button {
      display: flex;
      align-items: center;
      gap: 4px;

      border: 1px solid #fff;

      padding: 6px;

      border-radius: 40px;

      color: #fff;

      font-family: 'Wix Madefor Display';
      font-size: 12px;
      font-weight: 400;

      > img {
        width: 20px;
        height: 20px;

        transform: rotate(135deg);
      }
    }
  }

  > main {
    margin-top: 40px;
    padding-left: 60px;

    > p {
      color: #fff;

      font-family: 'Wix Madefor Display';
      font-size: 16px;
      font-weight: 400;
    }
  }

  @media (max-width: 1316px) {
    padding: 0 100px;

    > header {
      > div {
        > h1 {
          font-size: 32px;
        }
      }
    }

    > main {
      margin-top: 24px;
    }
  }

  @media (max-width: 1022px) {
    padding: 0 40px;
    margin-top: 55px;

    > header {
      > div {
        > h1 {
          font-size: 26px;
        }
      }
    }

    > main {
      margin-top: 16px;

      > p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 574px) {
    padding: 0 20px;
    margin-top: 30px;

    > header {
      flex-direction: column;

      > div {
        flex-direction: column;

        margin-bottom: 16px;
        gap: 0;

        > h1 {
          text-align: center;
        }
      }
    }

    > main {
      padding-left: 0;

      > p {
        text-align: center;
      }
    }
  }
`;

export const SectionTwo = styled.section`
  padding: 0 120px;
  margin-top: 40px;

  > main {
    > strong {
      color: #fff;

      font-family: 'New Farm Regular';
      font-size: 24px;
    }
  }
`;

export const SectionThree = styled.section`
  padding: 0 120px;
  margin-top: 80px;
  margin-bottom: 160px;

  > main {
    > strong {
      color: #fff;

      font-family: 'New Farm Regular';
      font-size: 24px;
    }
  }
`;

export const Card = styled.button`
  width: 90%;
  padding: 35px 0;

  text-align: left;

  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);

  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);

  > div {
    padding: 0 32px;

    > img {
      width: 100%;
      height: auto;
    }

    > strong {
      color: #000;

      font-family: 'Wix Madefor Display';
      font-size: 16px;
      font-weight: 400;

      margin-top: 8px;
    }

    > p {
      color: #000;

      font-family: 'Wix Madefor Display';
      font-size: 12px;
      font-weight: 400;

      margin-top: 4px;
    }

    > span {
      color: #000;

      font-family: 'Wix Madefor Display';
      font-size: 12px;
      font-weight: 400;

      margin-top: 4px;
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;

  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;

  ${(props) =>
    props.right
      ? css`
          right: -90px;
          padding-left: 15px;
          border-radius: 50% 0 0 50%;
          justify-content: flex-start;

          @media (max-width: 897px) {
            padding-left: 6px;
          }
        `
      : css`
          left: -90px;
          padding-right: 15px;
          border-radius: 0 50% 50% 0;
          justify-content: flex-end;

          @media (max-width: 897px) {
            padding-right: 6px;
          }
        `};

  transition: all 0.5s;

  border: 0;

  z-index: 1000;

  width: 150px;
  height: 70%;

  opacity: 1;

  cursor: pointer;

  @media (max-width: 897px) {
    width: 120px;

    > img {
      width: 20px;
      height: 20px;
    }
  }
`;
