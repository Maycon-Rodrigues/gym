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

class Evaluations extends Component {
  state = {
    evaluations: [],
  };

  componentDidMount() {
    this.loadEvaluations();
  }

  loadEvaluations = async () => {
    const response = await api.get('evaluations');
    this.setState({ evaluations: response.data });
    console.log(this.state.date);
  };

  calcAge = dateString => {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  };

  render() {
    const { classes } = this.props;
    const { evaluations } = this.state;

    return (
      <div>
        <AppBar />
        <Grid>
          <Typography style={{ paddingTop: 20, paddingLeft: 10 }} variant='h4'>
            Evaluations
          </Typography>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Idade</TableCell>
                  <TableCell>Altura</TableCell>
                  <TableCell>Peso</TableCell>
                  <TableCell>IMC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {evaluations.map(customer => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{this.calcAge(customer.born)}</TableCell>
                    {customer.evaluations.map(evaluation => (
                      <>
                        <TableCell>{evaluation.height}</TableCell>
                        <TableCell>{evaluation.weight}</TableCell>
                        <TableCell>{evaluation.bmi}</TableCell>
                      </>
                    ))}
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

export default withStyles(styles)(Evaluations);
