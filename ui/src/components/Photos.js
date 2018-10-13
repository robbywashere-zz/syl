import React from "react";

import { connect } from "react-redux";

import { Grid } from "@material-ui/core";

import styled from "styled-components";

const Photo = styled(({ src, ...props }) => <div {...props} />)`
  width: 100%;
  height: 300px;
  background-image: url(${p => p.src});
  background-color: ${p => p.theme.palette.background.paper};
  margin: ${p => p.theme.spacing.unit * 2}px;
  box-shadow: ${p => p.theme.shadows[10]};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Photos = ({ photos }) => (
  <Grid container>
    {photos.map(({ src }, i) => (
      <Photo src={src} key={i} />
    ))}
  </Grid>
);

export default connect(state => ({
  photos: state.api.photos
}))(Photos);
