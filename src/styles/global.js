import { createGlobalStyle } from "styled-components";

import NewFarmRegular from '../assets/fonts/New_Farm_Regular.otf'
import NewFarmLight from '../assets/fonts/New_Farm_Light.otf'
import NewFarmMedium from '../assets/fonts/New_Farm_Medium.otf'
import NewFarmBold from '../assets/fonts/New_Farm_Bold.otf'

export default createGlobalStyle`
  @font-face {
    font-family: 'New Farm Regular';
    src: url(${NewFarmRegular});
  }

  @font-face {
    font-family: 'New Farm Light';
    src: url(${NewFarmLight});
  }

  @font-face {
    font-family: 'New Farm Medium';
    src: url(${NewFarmMedium});
  }

  @font-face {
    font-family: 'New Farm Bold';
    src: url(${NewFarmBold});
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;