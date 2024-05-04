import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  @media (max-width: 872px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    > div:nth-last-child(1) {
      @media (min-width: 872px) {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

export const Control = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > span {
    color: rgba(255, 255, 255, 0.80);

    font-family: "New Farm Medium";
    font-size: 16px;
  }

  @media (max-width: 1346px) {
    > span {
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
    > span {
      font-size: 13px;
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 872px) {
    position: absolute;
    top: 100%;
    left: 0;

    border: 1px solid ${props => props.type === 'fire' ? '#982815' : '#46AA97'};

    ${props => !props.qrCode ? css`
      width: 311px;
      height: 327px;
    ` : css`
      padding: 24px 16px;
    `}

    border-radius: 0 8px 8px 8px;

    background: rgba(0, 0, 0, 0.23);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    visibility: hidden;
    opacity: 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    > img {
      max-width: 100%;
      height: auto;
    }

    > p {
      color: rgba(255, 255, 255, 0.80);

      text-align: center;
      font-family: "Wix Madefor Display";
      font-size: 12px;
      font-weight: 500;

      max-width: 120px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      > span {
        color: #FFF;

        text-align: center;
        font-family: "Wix Madefor Display";
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 872px) {
    > img {
      display: none;
    }
  }

  > img {
    position: absolute;

    &:nth-child(1) {
      top: 4px;
      left: 4px;
    }

    &:nth-last-child(1) {
      bottom: 4px;
      right: 4px;
    }
  }

  > ul {
    margin-left: 48px;
    margin-right: 24px;
    margin-top: 19px;

    list-style: none;

    > li {
      & + * {
        margin-top: 24px;
      }

      > a {
        display: flex;
        flex-direction: column;
        gap: 13px;

        padding: 4px 8px;

        border-radius: 8px;

        background-color: transparent;

        transition: background-color, .2s;

        
        &:hover {
          @media (min-width: 872px) {
            background-color: #ffffff10;
          }
        }

        > strong {
          font-size: 16px;
          font-family: 'New Farm Medium';

          color: rgba(255, 255, 255, 0.70);
        }

        > span {
          color: rgba(255, 255, 255, 0.30);

          font-size: 12px;
          font-family: 'Wix Madefor Display';
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 872px) {
    max-height: 0px;

    transition: max-height .2s;

    overflow: hidden;

    ${props => props.visible && css`
      max-height: 400px;
    `}

    > ul {
      margin: 0;
      margin-top: 4px;

      > li {
        & + * {
          margin-top: 0px;
        }

        > a {
          > strong {
            font-size: 12px;
            font-family: 'New Farm Medium';

            color: #fff;
          }

          > span {
            display: none;
          }
        }
      }
    }
  }
`;
