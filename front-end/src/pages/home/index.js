import React, { Component } from 'react';

import AppBar from '../../component/AppBar';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Grid container direction='row' justify='center' alignItems='center'>
          <Typography style={{ paddingTop: 20 }} variant='h4'>
            Home
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default Home;
