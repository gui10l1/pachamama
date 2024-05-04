import styled, { css } from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);

  padding: 16px 0;

  width: 100%;

  @media (max-width: 1255px) {
    padding: 12px 0;
  }
`;

export const Toggler = styled.button`
  color: ${props => props.opened ? '#000' : '#433F52'};
  font-family: "Wix Madefor Display";
  font-size: 24px;
  font-weight: ${props => props.opened ? 500 : 400};

  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1513px) {
    font-size: 20px;
  }

  @media (max-width: 1255px) {
    font-size: 18px;

    > img {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 1158px) {
    font-size: 16px;
  }

  @media (max-width: 472px) {
    font-size: 14px;

    text-align: left;
  }
`;

export const Content = styled.div`
  overflow: hidden;

  max-height: 0px;

  transition: max-height .4s;

  ${props => props.opened && css`
    max-height: 120px;
  `}

  > p {
    color: #433F52;
    font-family: "Wix Madefor Display";
    font-size: 16px;
    font-weight: 400;

    margin-top: 16px;

    > a {
      color: #000;
      font-family: "Wix Madefor Display";
      font-size: inherit;
      font-weight: 400;

      text-decoration: underline;
      text-decoration-color: #000;
    }
  }

  @media (max-width: 1513px) {
    margin-top: 10px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 472px) {
    > p {
      font-size: 12px;
    }
  }
`;
