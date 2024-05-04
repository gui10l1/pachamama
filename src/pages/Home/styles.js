import styled from 'styled-components';

import backgroundOne from '../../assets/img/home/background-1.png';
import cardOne from '../../assets/img/home/card-1.png';
import cardTwo from '../../assets/img/home/card-2.png';
import cardThree from '../../assets/img/home/card-3.png';

const itemBorder = {
  fire: 'linear-gradient(to bottom, #982815, #EF7878)',
  air: 'linear-gradient(to bottom, #9ABED8, #EADB9D)',
  earth: 'linear-gradient(to bottom, #982815, #EF7878)',
  aqua: 'linear-gradient(to bottom, #46AA97, #78C9D8)'
};

export const Container = styled.div`
  // CODE
`;

export const SectionOne = styled.section`
  background-image: url(${backgroundOne});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 92px;

  height: 100vh;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    margin-top: 188px;

    > p {
      color: #fff;

      text-align: center;
      font-family: 'New Farm Bold';
      font-size: 40px;

      max-width: 62%;
    }
  }

  > p {
    color: rgba(255, 255, 255, 0.6);

    font-size: 17px;
    font-family: 'Wix Madefor Display';

    text-align: center;

    max-width: 46%;

    margin: 20px auto 0;
  }

  @media (max-width: 1265px) {
    > div:nth-child(1) {
      > p {
        font-size: 32px;

        max-width: 62%;
      }
    }

    > p {
      font-size: 16px;
    }
  }

  @media (max-width: 958px) {
    > div:nth-child(1) {
      > p {
        font-size: 28px;

        max-width: 75%;
      }
    }

    > p {
      font-size: 15px;

      max-width: 75%;
    }
  }

  @media (max-width: 702px) {
    > div:nth-child(1) {
      > p {
        font-size: 25px;

        max-width: 100%;

        padding: 0 20px;
      }
    }

    > p {
      font-size: 15px;

      max-width: 100%;

      padding: 0 20px;
    }
  }

  @media (max-width: 552px) {
    > div:nth-child(1) {
      > p {
        font-size: 22px;
      }
    }

    > p {
      font-size: 13px;
    }
  }
`;

export const SectionTwo = styled.div`
  padding: 168px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #000;

    text-align: center;
    font-family: 'New Farm Regular';
    font-size: 56px;

    max-width: 40%;
  }

  > p {
    color: rgba(0, 0, 0, 0.7);

    text-align: center;
    font-family: 'Wix Madefor Display';
    font-size: 17px;
    font-weight: 500;

    margin-bottom: 70px;
    margin-top: 26px;

    max-width: 56%;
  }

  @media (max-width: 1603px) {
    padding: 130px;

    > h1 {
      font-size: 40px;
      max-width: 40%;
    }

    > p {
      font-size: 16px;
      max-width: 70%;
    }
  }

  @media (max-width: 1233px) {
    padding: 100px;

    > h1 {
      font-size: 32px;
      max-width: 40%;
    }

    > p {
      font-size: 15px;
      max-width: 89%;
    }
  }

  @media (max-width: 1024px) {
    padding: 60px 20px;

    > p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 862px) {
    > h1 {
      max-width: 65%;
    }

    > p {
      max-width: 100%;
    }
  }

  @media (max-width: 502px) {
    > h1 {
      max-width: 100%;
    }

    > p {
      max-width: 100%;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  flex-wrap: wrap;

  gap: 8px;

  @media (max-width: 862px) {
    row-gap: 16px;
  }
`;

export const Item = styled.div`
  background: ${(props) => itemBorder[props.type]};
  padding: 1px;

  max-width: 241px;
  width: 100%;
  height: 247px;

  border-radius: 16px;

  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.15);

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
`;

export const SectionThree = styled.div`
  border-radius: 32px 32px 0px 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 88.05%, rgba(0, 0, 0, 0) 100%);

  padding-top: 80px;
  padding-bottom: 32px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    padding-bottom: 70px;

    > h1 {
      color: #fff;

      text-align: center;
      font-family: 'New Farm Bold';
      font-size: 40px;
    }
  }

  > main {
    padding-top: 160px;

    .carousel {
      margin-left: 80px;
      margin-top: 160px;
    }

    .card {
      width: 320px;
      height: 451px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: white;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      > div {
        background-color: #ffffff03;

        box-shadow: -2px 4px 10px 0px #00000040;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 8px;

        border-radius: 16px;

        > img {
          box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.4);
          width: 187px;
          height: 238px;

          border-radius: 16px;
        }

        > strong {
          font-family: 'Wix Madefor Display';
          font-size: 20px;
          font-weight: 600;

          margin: 16px 0 8px;
        }

        > span {
          font-family: 'Wix Madefor Display';
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 1603px) {
    padding-top: 50px;

    > header {
      padding-bottom: 40px;

      > h1 {
        font-size: 32px;
      }
    }

    > main {
      padding-top: 100px;
    }
  }

  @media (max-width: 834px) {
    > main {
      .card {
        width: 250px;
        height: 381px;

        > div {
          > img {
            max-width: 100%;
            height: auto;
          }

          > strong {
            font-size: 18px;
          }

          > span {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    > main {
      padding-top: 80px;

      .carousel {
        margin-left: 0;
        margin-top: 160px;
      }

      .carousel-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const CarouselGroup = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const CarouselControls = styled.div`
  margin-top: 64px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 160px;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const MoreAbout = styled.button`
  background-color: #fff;

  display: flex;
  align-items: center;

  padding: 6px 16px;

  border-radius: 16px;

  max-width: max-content;
  margin-left: auto;
  margin-right: 120px;

  margin-bottom: 32px;

  > span {
    margin-right: 4px;

    color: #000;

    font-family: 'Wix Madefor Display';
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    margin: 32px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 80px;
  
  flex-wrap: wrap;
  
  padding: 0 20px;
  padding-bottom: 160px;

  @media (max-width: 834px) {
    gap: 20px;

    padding-bottom: 80px;
  }
`;

export const Secretary = styled.div`
  background-image: url(${cardOne});
`;

export const Founder = styled.div`
  background-image: url(${cardTwo});
`;

export const Associate = styled.div`
  background-image: url(${cardThree});
`;

export const SectionFour = styled.section`
  padding-top: 41px;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    > h1 {
      color: #000;

      text-align: center;
      font-family: 'New Farm Bold';
      font-size: 56px;
      line-height: 71px;

      margin-top: 10px;
    }

    > p {
      color: rgba(0, 0, 0, 0.7);

      text-align: center;
      font-family: 'Wix Madefor Display';
      font-size: 17px;
      font-weight: 500;

      max-width: 60%;

      margin-top: 26px;
    }
  }

  > main {
    padding: 0 120px;
    margin-top: 80px;
  }

  @media (max-width: 1603px) {
    > header {
      > h1 {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }

  @media (max-width: 1024px) {
    > header {
      > h1 {
        font-size: 32px;
        line-height: unset;
      }

      > p {
        font-size: 18px;
        max-width: 80%;
      }
    }

    > main {
      padding: 0 20px;
      margin-top: 45px;
    }
  }
`;

export const SponsorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  & + * {
    margin-top: 32px;
  }

  @media (max-width: 1024px) {
    gap: 8px;

    flex-direction: column;
  }
`;

export const Sponsor = styled.div`
  padding: 14px 0;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  min-height: 185px;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  gap: 24px;

  > img {
    max-width: 100%;
  }

  > p {
    max-width: 68%;

    text-align: center;

    color: rgba(0, 0, 0, 0.7);

    font-family: 'Wix Madefor Display';
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 1435px) {
    > p {
      max-width: 92%;
      font-size: 16px;
    }
  }

  @media (max-width: 1131px) {
    > p {
      max-width: 100%;
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    width: 100%;

    > img {
      max-width: 90%;
      height: auto;
    }
    
    > p {
      padding: 0 20px;
    }
  }
`;

export const SectionFive = styled.section`
  display: flex;
  align-items: flex-start;

  padding: 0 120px 120px;
  margin-top: 168px;

  > header {
    flex: 1;

    margin-top: 8px;
    margin-bottom: 16px;

    > h1 {
      color: #000;

      font-family: 'New Farm Bold';
      font-size: 56px;

      max-width: 50%;
    }

    > p {
      color: rgba(0, 0, 0, 0.7);

      font-family: 'Wix Madefor Display';
      font-size: 17px;
      font-weight: 400;

      max-width: 45%;

      > a {
        color: #000;
        font-family: 'Wix Madefor Display';
        font-size: inherit;
        font-weight: 400;

        text-decoration: underline;
        text-decoration-color: #000;
      }
    }
  }

  > main {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > div {
      max-width: 670px;
    }
  }

  @media (max-width: 1395px) {
    padding: 0 80px 80px;
    margin-top: 100px;

    > header {
      > h1 {
        font-size: 47px;

        max-width: 65%;
      }

      > p {
        max-width: 59%;
      }
    }
  }

  @media (max-width: 1255px) {
    > header {
      > h1 {
        font-size: 47px;

        max-width: 65%;
      }

      > p {
        max-width: 59%;
      }
    }
  }

  @media (max-width: 1024px) {
    > header {
      flex: 1;

      > h1 {
        max-width: 100%;
        font-size: 32px;
      }
    }

    > main {
      flex: unset;
    }
  }

  @media (max-width: 812px) {
    margin-top: 60px;
    padding: 0 20px;

    flex-direction: column;
    align-items: center;

    > header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;

      > p {
        margin: 0 auto;
        max-width: 100%;
        margin-top: 16px;
      }
    }

    > main {
      width: 100%;
      
      margin-top: 40px;
    }
  }
`;
