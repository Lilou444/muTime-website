import React from 'react';

import Navbar from '../components/navbar/Navbar';
import StickyHeadTable from '../components/StickyHeadTable';

const Administration = () => (
  <div>
    <Navbar />
    <center><h2>Tableau des utilisateurs</h2></center>
    <StickyHeadTable />
  </div>
);

export default Administration;
