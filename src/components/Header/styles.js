import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  max-width: 100%;
  width: 100%;
`;

export const ContainerBlur = styled.div`
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(11.7px);

  position: absolute;

  top: 0;
  left: 0;

  z-index: 1;
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 100%;

  z-index: 2;

  position: relative;
`;

export const ImgWrapper = styled(Link)`
  margin-left: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1346px) {
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
    > img {
      max-width: 200px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    > img {
      max-width: 150px;
      height: auto;
    }
  }

  @media (max-width: 500px) {
    > img {
      max-width: 130px;
      height: auto;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  list-style: none;

  > li {
    color: rgba(255, 255, 255, 0.80);

    font-family: "New Farm Medium";
    font-size: 16px;

    > a {
      color: inherit;
    }
  }

  @media (max-width: 1346px) {
    gap: 20px;

    > li {
      > a {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1024px) {
    gap: 8px;

    > li {
      > a {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 872px) {
    display: none;
  }
`;

export const Languages = styled.div`
  margin-right: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 59px;

  @media (max-width: 1346px) {
    margin-right: 20px;
    gap: 29px;
  }

  @media (max-width: 1346px) {
    margin-right: 10px;
    gap: 18px;
  }

  @media (max-width: 872px) {
    display: none;
  }
`;

export const BeOneOfUs = styled.div`
  background: linear-gradient(to bottom, #CC6A51, #7F96BA);
  border-radius: 70px;

  padding: 1px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    background-color: rgba(0, 0, 0, .5);

    backdrop-filter: blur(5px);

    border-radius: inherit;

    > button {
      background: linear-gradient(to bottom, #EFC4C4, #94BBE9);

      font-family: 'New Farm Medium';
      font-size: 16px;
      
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 1346px) {
    > div {
      > button {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1024px) {
    > div {
      padding: 7px;

      > button {
        font-size: 12px;
      }
    }
  }
`;

export const LanguagesControls = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #fff;
  border-radius: 12px;

  background-color: #0000004D;

  > button {
    padding: 10px 12px;

    font-family: 'New Farm Regular';
    font-size: 12px;

    color: #fff;
    background-color: transparent;

    &:nth-child(1) {
      border-right: 0.5px solid #fff;

      border-radius: 9px 0 0 9px;

      ${props => props.current === 'es' && css`
        color: #000;
        background-color: white;
      `}
    }

    &:nth-child(2) {
      border-left: 0.5px solid #fff;

      border-radius: 0 9px 9px 0;

      ${props => props.current === 'pt' && css`
        color: #000;
        background-color: white;
      `}
    }
  }

  @media (max-width: 1024px) {
    > button {
      padding: 7px 9px;
    }
  }
`;

export const MenuButton = styled.div`
  display: none;
  padding-right: 8px;

  > button {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 872px) {
    display: block;
  }
`;

export const MenuMobile = styled.div`
  max-height: 0px;
  transition: max-height ease .6s;

  overflow: hidden;

  z-index: 2;

  position: relative;
`;

export const NavMobile = styled(Nav)`
  display: flex;
  flex-direction: column;

  @media (min-width: 872px) {
    display: none;
  }
`;

export const LanguagesMobile = styled(Languages)`
  display: flex;
  flex-direction: column;

  margin: 16px 0;

  gap: 8px;

  @media (min-width: 872px) {
    display: none;
  }
`;
