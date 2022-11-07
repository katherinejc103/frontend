import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Button color="inherit" component={ Link } to="/">Katherine's Closet</Button>
            </Typography>
            <Button color="inherit" component={ Link } to="/outfits">Outfit Catalog</Button>
            <Button color="inherit" component={ Link } to="/outfits/new">New Outfit Combos</Button>
            <Button color="inherit" component={ Link } to="/outfits/seasons">Create A Season?</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default NavBar;

