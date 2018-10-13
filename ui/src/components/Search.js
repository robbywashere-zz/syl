import { Grid, TextField, Button } from "@material-ui/core";
import React from "react";
import { fetchPhotos } from "../redux/api";
import { connect } from "react-redux";
import { Progress } from "./Progress";
import { Paginate } from "./Paginate";

class Search extends React.Component {
  origState = {
    page: 0,
    count: 10
  };
  constructor() {
    super();
    this.state = { ...this.origState, search: "lizards" };
  }
  fetcher = () =>
    this.props.dispatch(
      fetchPhotos({
        q: this.state.search,
        offset: this.state.page * this.state.count,
        count: this.state.count
      })
    );
  reset = (cb = () => {}) => this.setState(this.origState, cb);
  setPage = page => this.setState({ page }, this.fetcher);
  setSearch = q => this.setState({ search: q });
  setCount = count => this.setState({ count }, this.fetcher);
  render() {
    const { total, loading } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          <TextField
            disabled={loading}
            label="Photos"
            value={this.state.search}
            onChange={e => this.setSearch(e.target.value)}
          />
          <Button
            disabled={loading}
            variant="contained"
            onClick={() => this.reset(this.fetcher)}
            color="primary"
          >
            {loading ? <Progress /> : "Search"}
          </Button>
        </Grid>
        <Grid container>
          <Paginate
            total={total}
            count={this.state.count}
            page={this.state.page}
            setCount={this.setCount}
            setPage={this.setPage}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  loading: state.api.loading,
  total: state.api.total
}))(Search);
