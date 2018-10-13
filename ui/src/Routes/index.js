import React from "react";
import Layout from "../Layout";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Home2 } from "../pages/Home2";
import { Page } from "../components/Gridding";

const Routes = () => (
  <Router>
    <Layout>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>

      <Page>
        <Route exact path="/" component={Home} />
        <Route path="/home2" component={Home2} />
      </Page>
    </Layout>
  </Router>
);

//TODO export default connect(state => ({ authed: state.login.authed }))(Routes);
export default Routes;
