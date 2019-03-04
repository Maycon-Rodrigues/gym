import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../services/auth';

import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function AvatarToggle() {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        const handleLogout = () => {
          logout();
        };

        return (
          <React.Fragment>
            <Avatar
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup='true'
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            />
            <Menu
              id='render-props-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem component={Link} to='/' onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default AvatarToggle;
