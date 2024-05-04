import styled from "styled-components";

export const Container = styled.footer`
  padding: 72px 80px 14px;

  backdrop-filter: blur(5px);

  @media (max-width: 1379px) {
    padding: 50px 40px 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 81px;

  flex-wrap: wrap;
  row-gap: 24px;

  @media (max-width: 1379px) {
    padding-bottom: 40px;
  }

  @media (max-width: 977px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    align-items: flex-start;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    color: ${props => props.tint === 'dark' ? '#fff' : '#000'};

    font-family: "New Farm Medium";
    font-size: 12px;
    font-weight: 500;

    max-width: 201px;

    text-align: justify;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4px;

    margin-top: 24px;

    > p {
      color: ${props => props.tint === 'dark' ? '#fff' : '#000'};

      text-align: center;
      font-family: "Wix Madefor Display";
      font-size: 12px;
      font-weight: 400;
    }
  }

  @media (max-width: 1197px) {
    > strong {
      max-width: 169px;
    }
  }

  @media (max-width: 977px) {
    > strong {
      max-width: 169px;
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;

  > li {
    color: ${props => props.tint === 'dark' ? '#fff' : '#000'};

    > a {
      color: ${props => props.tint === 'dark' ? '#fff' : '#000'};
    }

    font-family: "New Farm Medium";
    font-size: 12px;

    > ul {
      list-style: none;

      margin-top: 16px;

      > li {
        > a {
          color: ${props => props.tint === 'dark' ? '#fff' : '#000'};
        }

        font-family: "Wix Madefor Display";
        font-size: 12px;

        & + li {
          margin-top: 8px;
        }
      }
    }
  }

  @media (max-width: 1379px) {
    gap: 25px;
  }

  @media (max-width: 1197px) {
    gap: 15px;
  }

  @media (max-width: 977px) {
    gap: 8px;
  }
  
  @media (max-width: 425px) {
    flex-direction: column;

    > li {
      margin-top: 16px;

      > ul {
        margin-top: 8px;
      }
    }
  }
`;

export const BeOneOfUs = styled.div`
  > button {
    padding: 0 32px;

    color: ${props => props.tint === 'dark' ? '#000' : '#fff'};

    font-family: "New Farm Medium";
    font-size: 12px;

    border-radius: 16px;
    background-color: ${props => props.tint === 'dark' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.95)'};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    height: 35px;

    > img {
      height: 20px;
      width: 20px;

      transform: rotate(125deg);
    }
  }

  @media (max-width: 977px) {
    > button {
      height: 25px;
      padding: 0 16px;
      font-family: "New Farm Regular";

      > img {
        height: 16px;
        width: 16px;

        transform: rotate(125deg);
      }
    }
  }
`;

export const Copy = styled.div`
  padding: 24px 0 14px;

  border-top: 1px solid rgba(0, 0, 0, 0.10);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    font-size: 15px;
    text-decoration: underline;
    text-decoration-color: ${props => props.tint === 'dark' ? '#fff' : '#000'};
    color: ${props => props.tint === 'dark' ? '#fff' : '#000'};

    font-family: 'Raleway';

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  > p {
    color: ${props => props.tint === 'dark' ? '#fff' : '#000'};

    font-family: 'Raleway';
    font-size: 12px;
    font-weight: 300;
  }
`;
