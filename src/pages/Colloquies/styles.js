import styled from 'styled-components';
import bg from '../../assets/img/magazines/bg.png';
import houses from '../../assets/img/colloquies/houses.png';

export const Container = styled.div`
  background-image: url(${bg}), linear-gradient(#cc6a51, #7f96ba);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  padding-top: 92px;
`;

export const SectionOne = styled.section`
  padding-bottom: 160px;
  margin-top: 64px;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-bottom: 121px;

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

  > main {
    background-image: url(${houses});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    margin: 0 20px;

    border-radius: 32px;

    box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.3);

    padding: 60px 80px;

    > div {
      max-width: 38%;

      > h1 {
        color: #fff;

        font-family: 'New Farm Bold';
        font-size: 32px;
      }

      > span {
        font-size: 16px;
        color: #fff;
        margin-top: 8px;

        display: block;

        font-family: "Wix Madefor Display";
        font-weight: 400;
      }

      > p {
        max-width: 70%;

        color: #FFF;

        font-family: "Wix Madefor Display";
        font-size: 16px;
        font-weight: 400;

        margin-top: 26px;
      }

      > ul {
        margin-top: 24px;
        
        > li {
          color: #FFF;

          font-family: "Wix Madefor Display";
          font-size: 16px;
          font-weight: 500;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;

          & + li {
            margin-top: 10px;
          }
        }
      }

      > button {
        border-radius: 16px;
        border: 1px solid var(--icon-geral, #FFF);

        background: rgba(255, 255, 255, 0.05);

        margin-top: 24px;

        color: #FFF;

        font-family: "Wix Madefor Display";
        font-size: 16px;
        font-weight: 500;

        padding: 10px 25px;

        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  @media (max-width: 1316px) {
    > header {
      margin-bottom: 80px;

      > h1 {
        font-size: 32px;
      }
    }

    > main {
      > div {
        max-width: 50%;
      }
    }
  }

  @media (max-width: 1022px) {
    margin-top: 0;

    > header {
      margin-bottom: 20px;

      > h1 {
        font-size: 26px;
      }
    }

    > main {
      > div {
        max-width: 60%;
      }
    }
  }

  @media (max-width: 888px) {
    > main {
      > div {
        max-width: 90%;
      }
    }
  }

  @media (max-width: 650px) {
    > main {
      padding: 30px 50px;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        max-width: 100%;

        text-align: center;

        > h1 {
          font-size: 25px;
        }

        > p {
          max-width: 100%;

          font-size: 16px;

          margin-top: 8px;
        }

        > ul {
          margin-top: 8px;

          > li {
            font-size: 15px;
          }
        }

        > button {
          margin-top: 16px;
        }
      }
    }
  }

  @media (max-width: 444px) {
    padding-bottom: 50px;

    > main {     
      padding: 0;
      
      > div {
        padding: 20px 30px;

        backdrop-filter: blur(2px);

        border-radius: 33px;

        > h1 {
          font-size: 22px;
        }

        > p {
          font-size: 13px;
        }

        > ul {
          > li {
            font-size: 12px;

            text-align: left;
          }
        }

        > button {
          font-size: 12px;
        }
      }
    }
  }
`;
