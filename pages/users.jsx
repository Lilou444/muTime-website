import Head from 'next/head';
import React from 'react';

import StickyHeadTable from '../components/StickyHeadTable';

const Users = () => (
  <div>
    <Head>
      <title>muTime - Utilisateurs</title>
    </Head>
    <center><h2>Tableau des utilisateurs</h2></center>
    <center><StickyHeadTable /></center>
  </div>
);

export default Users;
