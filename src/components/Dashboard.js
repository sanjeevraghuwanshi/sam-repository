import React from 'react';
import { Grid, Paper, Button, Snackbar } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import { Close, Icon } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const styles = theme => ({
  buttonPadding: {
    padding: '30px',
  },
});

const Dashboard = (props) => {
  const { classes } = props;
  const { t, i18n } = useTranslation('common');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Grid item xs={12}>
      <Paper>
        <div className={classes.buttonPadding}>
          <h3> {t('comp.order')}</h3>
          <Button onClick={handleClick}> {t('comp.openSnackbar')} </Button>
        </div>
        <Snackbar
          className="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          variant="success"
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id"> {t('comp.noteArchived')} </span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={handleClose}>
              {t('comp.undo')}
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"

              onClick={handleClose}
            >
              <Close />
            </IconButton>,
          ]}
        />
      </Paper>
    </Grid>
  );
}
export default withStyles(styles)(Dashboard);