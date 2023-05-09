import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../Styles";

type Props = {};

const Footer = (props: Props) => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container className={classes.footer} >
        <Grid item><Typography variant="h6">@copy; Anthony Mwenyo 2023</Typography></Grid>
        <Grid item><Typography variant="h6">All Rights Reserved</Typography></Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
