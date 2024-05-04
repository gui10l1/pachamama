import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyles from './styles/global';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StyleSheetManager>
  );
}

export default App;
