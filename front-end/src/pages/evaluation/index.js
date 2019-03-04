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
    evaluations: [],
  };

  componentDidMount() {
    this.loadEvaluations();
  }

  loadEvaluations = async () => {
    const response = await api.get('evaluations');
    this.setState({ evaluations: response.data });
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
                  <TableCell>Altura</TableCell>
                  <TableCell>Peso</TableCell>
                  <TableCell>IMC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {evaluations.map(evaluation => (
                  <TableRow key={evaluation.id}>
                    <TableCell>{evaluation.customer_id}</TableCell>
                    <TableCell>{evaluation.height}</TableCell>
                    <TableCell>{evaluation.weight}</TableCell>
                    <TableCell>{evaluation.bmi}</TableCell>
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
