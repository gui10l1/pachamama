import styled, { css } from 'styled-components';
import bg from '../../assets/img/magazines/bg.png';
import cardBg from '../../assets/img/magazines/card.png';

export const Container = styled.div`
  background-image: url(${bg}), linear-gradient(#cc6a51, #7f96ba);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  padding-top: 92px;
`;

export const SectionOne = styled.section`
  padding-bottom: 120px;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-bottom: 131px;
    margin-top: 64px;

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

  @media (max-width: 1316px) {
    > header {
      > h1 {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 1022px) {
    > header {
      > h1 {
        font-size: 26px;
      }
    }
  }

  @media (max-width: 500px) {
    > header {
      margin-bottom: 20px;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  width: calc(33% - 121px);
  height: calc(401px - 65px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  box-shadow: -2px 4px 100.7px 0px rgba(255, 255, 255, 0.1);

  background-image: url(${cardBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 32px;

  padding-bottom: 65px;

  > img {
    max-width: 100%;
    height: auto;
  }

  > strong {
    color: #fff;

    font-family: 'New Farm Bold';
    font-size: 20px;

    margin-bottom: 39px;
    margin-top: 45px;

    text-align: center;
  }

  > button {
    background-color: #fff;
    padding: 10px;

    color: #000;

    font-family: 'Wix Madefor Display';
    font-size: 16px;
    font-weight: 400;

    border-radius: 50px;
  }

  @media (max-width: 1215px) {
    width: calc(33% - 50px);
  }

  @media (max-width: 1024px) {
    width: calc(33% - 30px);
  }

  @media (max-width: 851px) {
    width: calc(33% - 20px);
  }

  @media (max-width: 512px) {
    width: 100%;

    margin: 20px 20px 0;
  }
`;
