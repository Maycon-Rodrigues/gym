import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';
import AvatarToggle from './AvatarToggle';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { blue300 } from 'material-ui/styles/colors';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    background: blue300,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appName: {
    padding: 10,
    marginLeft: 10,
  },
  left: {
    marginLeft: 'auto',
  },
};

class SimpleAppBar extends Component {
  state = {
    drawerOpened: false,
  };

  handleDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.bar} position='static'>
          <Drawer
            docked={false}
            open={this.state.drawerOpened}
            onRequestChange={this.handleDrawer}
          >
            <MenuList>
              <Typography className={classes.appName} variant='h6'>
                Meu App
              </Typography>
              <Divider />
              <MenuItem style={{ background: '#eee' }} component={Link} to='/'>
                Painel
              </MenuItem>
              <Divider />
              <MenuItem component={Link} to='/customers'>
                Clientes
              </MenuItem>
              <MenuItem component={Link} to='/evaluations'>
                Avaliações
              </MenuItem>
            </MenuList>
          </Drawer>
          <Toolbar>
            {isAuthenticated() ? (
              <IconButton
                className={classes.menuButton}
                color='inherit'
                onClick={this.handleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Typography variant='h6' color='inherit'>
                Nome do App
              </Typography>
            )}
            {isAuthenticated() ? (
              <div className={classes.left}>
                <AvatarToggle />
              </div>
            ) : (
              <Button
                component={Link}
                to='/signin'
                className={classes.left}
                color='inherit'
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
