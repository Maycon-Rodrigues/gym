import React, { Component } from 'react';
import api from '../../services/api';

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
    return (
      <div>
        <h1>Customer</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nascimeto</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.born}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customers;
