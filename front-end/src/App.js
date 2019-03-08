import React from 'react';
import Routes from './routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue300, deepPurple600 } from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {
    primary1Color: blue300,
    accent1Color: deepPurple600,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <Routes />
  </MuiThemeProvider>
);

export default App;
