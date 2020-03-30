import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import React from 'react';

import UsersTable from '../components/UsersTable';

const Users = ({ token }) => (
  <div>
    <Head>
      <title>muTime - Utilisateurs</title>
    </Head>
    <center><Typography variant="h5">Tableau des utilisateurs</Typography></center>
    <center><UsersTable token={token} /></center>
  </div>
);

export default Users;
