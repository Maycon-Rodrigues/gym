import React, { Component } from 'react';

import { login } from '../../services/auth';
import api from '../../services/api';
import './style.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const cardStyle = {
  maxWidth: 345,
};

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleSigin = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha todos os campos' });
    } else {
      try {
        const response = await api.post('signin', { email, password });
        login(response.data.token);
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
        this.setState({ error: 'Ocorreu um erro ao registrar sua conta' });
      }
    }
  };

  render() {
    return (
      <div className='content'>
        <div className='box'>
          <Card style={cardStyle}>
            <CardContent>
              <Typography align='center' variant='title'>
                Acessar
              </Typography>
              <Grid
                container
                direction='row'
                justify='center'
                alignContent='center'
              >
                <form className='form' onSubmit={this.handleSigin}>
                  {this.state.error && <p>{this.state.error}</p>}
                  <TextField
                    type='email'
                    name='email'
                    floatingLabelText='Email'
                    autoFocus
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <br />
                  <TextField
                    type='password'
                    name='password'
                    floatingLabelText='Password'
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <br />
                  <RaisedButton
                    fullWidth={true}
                    type='submit'
                    label='Entrar'
                    secondary={true}
                  />
                </form>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
