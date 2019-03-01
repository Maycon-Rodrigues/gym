import React, { Component } from 'react';
import api from '../../services/api';

import AppBar from '../../component/AppBar';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
                  <CustomTableCell>Nome</CustomTableCell>
                  <CustomTableCell>Nascimeto</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map(customer => (
                  <TableRow key={customer.id}>
                    <CustomTableCell>{customer.name}</CustomTableCell>
                    <CustomTableCell>{customer.born}</CustomTableCell>
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
