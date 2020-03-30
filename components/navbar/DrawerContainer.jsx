import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';

import DrawerItem from './DrawerItem';

const DrawerContainer = (props) => {
  const { drawerIsOpen, toggleDrawer } = props;

  return (
    <Drawer
      open={drawerIsOpen}
      variant="persistent"
    >
      <div>
        <IconButton onClick={() => toggleDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <DrawerItem
        href="/"
        icon={<HomeIcon />}
        text="Accueil"
      />
      <Divider />
      <DrawerItem
        href="/users"
        icon={<GroupIcon />}
        text="Utilisateurs"
      />
    </Drawer>
  );
};

export default DrawerContainer;
