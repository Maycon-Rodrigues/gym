import React, { Component } from 'react';
import api from '../../services/api';

import AppBar from '../../component/AppBar';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: 800,
  },
  table: {
    borderRadius: 2,
    paddingTop: 2,
  },
};

class Customers extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    this.loadCustumer();
  }

  loadCustumer = async () => {
    const response = await api.get('customers');
    this.setState({ customers: response.data });
  };

  render() {
    const { classes } = this.props;
    const { customers } = this.state;

    return (
      <div>
        <AppBar />
        <Grid container direction='row'>
          <Typography style={{ paddingTop: 20 }} variant='h4'>
            Customers
          </Typography>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Nascimeto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map(customer => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.born}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Customers);
