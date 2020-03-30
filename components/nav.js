import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import GroupIcon from '@material-ui/icons/Group'
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)

  const toggleDrawer = () => {setDrawerIsOpen(!drawerIsOpen)}

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            MuTime
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={drawerIsOpen}
      >
        <div>
          <IconButton onClick={() => toggleDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button key="Home">
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText>Accueil</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link href="/users">
            <ListItem button key="Users">
              <ListItemIcon><GroupIcon/></ListItemIcon>
              <ListItemText>Utilisateurs</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}