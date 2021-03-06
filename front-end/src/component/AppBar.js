import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { isAuthenticated } from '../services/auth';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AvatarToggle from './AvatarToggle';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { blue300 } from 'material-ui/styles/colors';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  left: {
    paddingRight: 20,
    marginLeft: 'auto',
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='static'
          style={{ background: blue300 }}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            {isAuthenticated() ? (
              <>
                <IconButton
                  color='inherit'
                  aria-label='Open drawer'
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6' color='inherit' noWrap>
                  App name
                </Typography>
                <div className={classes.left}>
                  <AvatarToggle />
                </div>
              </>
            ) : (
              <>
                <Typography
                  style={{ paddingLeft: 20 }}
                  variant='h6'
                  color='inherit'
                  noWrap
                >
                  App name
                </Typography>
                <Button
                  component={Link}
                  to='/signin'
                  className={classes.left}
                  color='inherit'
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <MenuList>
            <Divider />
            <MenuItem style={{ background: '#eee' }} component={Link} to='/'>
              <InboxIcon style={{ paddingRight: 40 }} />
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
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
