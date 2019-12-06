import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Chart from "react-google-charts";
import { withStyles } from '@material-ui/core/styles';

import { useTranslation, Trans } from "react-i18next";

const styles = theme => ({
  chartPadding: {
    padding: '20px'
  }
});

const AppChart = props => {
  const { classes } = props;
  const { t, i18n } = useTranslation('common');
  const activities = [
    ['Task', 'Hours per Day'],
    ['Work', 10],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
    ['Gym', 1],
  ];
  // https://react-google-charts.com/bar-chart#stacked-bar-chart-with-multiple-series
  const chartOptions = t('comp.options', { returnObjects: true, count: activities.length - 1 });
  return (
    <Grid item xs={12} className={classes.chartPadding}>
      <Paper>
        <h3 className={classes.chartPadding}> {t('comp.chart')}</h3>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>{t('comp.chartLoading')}</div>}
          data={activities}
          options={chartOptions}
          rootProps={{ 'data-testid': '1' }}
        />

      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(AppChart);