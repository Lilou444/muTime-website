import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

import Drawer from './DrawerContainer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const toggleDrawer = () => { setDrawerIsOpen(!drawerIsOpen); };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" variant="h6">
            MuTime
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer drawerIsOpen={drawerIsOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Navbar;
