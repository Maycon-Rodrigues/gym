import React, { Component } from 'react';
import api from '../../services/api';

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
        <h1>Evaluations</h1>
        <table>
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
        </table>
      </div>
    );
  }
}

export default Customers;
