import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
export const Progress = styled(CircularProgress).attrs({
  size: 24,
  color: "secondary"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
`;
