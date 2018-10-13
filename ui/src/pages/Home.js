import React from "react";

import { Grid } from "@material-ui/core";
import Search from "../components/Search";
import Photos from "../components/Photos";

export const Home = () => (
  <Grid container>
    <Search />
    <Photos />
  </Grid>
);
