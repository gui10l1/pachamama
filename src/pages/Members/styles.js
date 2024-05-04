import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000000e5;

  > section {
    > h1 {
      color: #fff;

      text-align: center;
      font-family: 'New Farm Bold';
      font-size: 56px;

      margin-bottom: 120px;
    }
  }

  @media (max-width: 1284px) {
    > section {
      > h1 {
        font-size: 40px;
        margin-bottom: 90px;
      }
    }
  }

  @media (max-width: 768px) {
    > section {
      > h1 {
        font-size: 32px;
        margin-bottom: 40px;
      }
    }
  }
`;

export const SectionOne = styled.section`
  padding: calc(80px + 92px) 120px;

  > div + div {
    margin-top: 80px;
  }

  @media (max-width: 1544px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1284px) {
    > div + div {
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;
  }

  @media (max-width: 652px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SectionTwo = styled.section`
  padding: 80px 120px;

  > div + div {
    margin-top: 80px;
  }

  @media (max-width: 1544px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1284px) {
    > div + div {
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;
  }

  @media (max-width: 652px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const SectionThree = styled.section`
  padding: 80px 120px;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 42px;
  }

  @media (max-width: 1544px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 1268px) {
    > div {
      grid-gap: 20px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;
  }

  @media (max-width: 652px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Card = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow: -2px 4px 100.7px 0px rgba(255, 255, 255, 0.1);

  .card-logo {
    position: absolute;

    bottom: 16px;
    right: 16px;
  }

  flex: 1;

  color: white;

  padding: 40px 72px;

  border-radius: 16px;

  > div {
    position: relative;

    background-color: #ffffff03;

    box-shadow: -2px 4px 10px 0px #00000040;

    border-radius: inherit;

    display: flex;
    gap: 32px;

    padding: 16px;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

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

        text-align: center;
      }

      > span {
        font-family: 'Wix Madefor Display';
        font-size: 16px;
        font-weight: 400;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      max-width: 444px;

      > strong {
        color: var(--icon-geral, #fff);

        font-family: 'Wix Madefor Display';
        font-size: 16px;
        font-weight: 600;
      }

      > p {
        color: #fff;

        font-family: 'Wix Madefor Display';
        font-size: 12px;
        font-weight: 400;

        margin: 8px 0 24px;
      }

      > ul {
        margin-top: 8px;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;

        list-style: none;

        > li {
          color: #fff;

          font-family: 'Wix Madefor Display';
          font-size: 12px;
          font-weight: 400;

          > a {
            color: inherit;
            text-decoration: underline;
            text-decoration-color: white;

            &::after {
              content: ';';
              color: #fff;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1544px) {
    padding: 30px 40px;
  }

  @media (max-width: 1244px) {
    padding: 30px 40px;
  }

  @media (max-width: 1268px) {
    padding: 30px;

    > div {
      > div:nth-child(1) {
        > img {
          max-width: 160px;
          height: auto;
        }
      }

      > div:nth-child(2) {
        > p {
          margin-bottom: 16px;
        }
      }
    }
  }

  @media (max-width: 608px) {
    > div {
      gap: 16px;

      flex-direction: column;

      padding-bottom: 70px;

      > div:nth-child(2) {
        > p {
          margin-bottom: 8px;
        }
      }
    }
  }
`;
