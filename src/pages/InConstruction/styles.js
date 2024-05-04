import styled from 'styled-components';
import bg from '../../assets/img/in-construction/bg.png';

export const Container = styled.div`
  background-image: url(${bg}), linear-gradient(#000, #000);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding-top: 92px;
`;

export const SectionOne = styled.section`
  padding: 120px 20px;

  > div {
    max-width: 60%;
    margin: 0 auto;

    background: linear-gradient(to bottom, #982815, #EF7878);

    border-radius: 32px;

    padding-top: 80px;

    height: 574px;

    > h1 {
      text-transform: uppercase;

      color: #fff;

      text-align: center;

      font-family: "New Farm Bold";
      font-size: 40px;
    }

    > p {
      color: rgba(255, 255, 255, 0.60);

      text-align: center;
      font-family: "Wix Madefor Display";
      font-size: 24px;
      font-weight: 400;

      max-width: 550px;

      margin: 0 auto;
      margin-top: 70px;
    }
  }

  @media (max-width: 1135px) {
    > div {
      max-width: 70%;

      height: 374px;

      padding-left: 20px;
      padding-right: 20px;

      > h1 {
        font-size: 32px;
      }

      > p {
        font-size: 18px;

        max-width: 650px;
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 661px) {
    > div {
      max-width: 80%;

      height: 274px;

      > h1 {
        font-size: 25px;
      }

      > p {
        font-size: 15px;

        max-width: 100%;
        margin-top: 16px;
      }
    }
  }
`;
