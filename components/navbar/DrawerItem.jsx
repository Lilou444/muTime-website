import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import React from 'react';

const DrawerItem = (props) => {
  const {
    href, icon, text,
  } = props;

  return (
    <List>
      <Link href={href}>
        <ListItem button>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItem>
      </Link>
    </List>
  );
};

export default DrawerItem;
