import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
