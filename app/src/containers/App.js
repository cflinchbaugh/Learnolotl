import React, { Component } from 'react';
//Global Styles pulled in here
import Fonts from '../styles/fonts.css';
import Util from '../styles/util.css';
import Animations from '../styles/animations.css';
import Router from './Router';
import {styled, ThemeProvider} from 'styled-components';
import theme from '../styles/colors';

export default(
  <ThemeProvider theme={theme}>
    <div className="App">
      <Router/>
    </div>
  </ThemeProvider>
);
