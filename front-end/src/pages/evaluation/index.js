import React, { Component } from 'react';
import api from '../../services/api';

import AppBar from '../../component/AppBar';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    return (
      <div>
        <AppBar />
        <Grid>
          <Typography style={{ paddingTop: 20, paddingLeft: 10 }} variant='h4'>
            Evaluations
          </Typography>
        </Grid>
        {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nascimeto</th>
            </tr>
          </thead>
          <tbody>
            {this.state.evaluations.map(evaluation => (
              <tr key={evaluation.id}>
                <td>{evaluation.name}</td>
                <td>{evaluation.born}</td>
              </tr>
            ))}
          </tbody>
            </table>*/}
      </div>
    );
  }
}

export default Customers;
