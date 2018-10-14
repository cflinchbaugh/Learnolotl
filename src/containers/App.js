import React from 'react';
//Global Styles pulled in here
import Fonts from 'styles/fonts.css';
import Util from 'styles/util.css';
import Bootstrap from '../oem/bootstrap.min.css';
import Animations from 'styles/animations.css';
import Router from './Router';
import {styled, ThemeProvider} from 'styled-components';
import theme from 'styles/colors';

import { Provider } from 'react-redux';
import store from './store';

export default(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App col-xs-12">
        <Router/>
      </div>
    </ThemeProvider>
  </Provider>
);
