import React from 'react';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import SalesChart from './SalesChart';
import AccountGraph from './AccountGraph';
import Earning from './Earning';
import Gauge from './Gauge';
import AppPageMeta from '../../@crema/core/AppPageMeta';


const Dashboard = () => {
  return (
    <>
      <AppPageMeta />
      <AppGridContainer>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <SalesChart />
        </Grid>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <AccountGraph />
        </Grid>
        <Grid item xs={12} md={4}>
          {/** Stacked Area Chart */}
          <Earning />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Dashboard;
