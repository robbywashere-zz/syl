import { TablePagination } from "@material-ui/core";
import React from "react";
export const Paginate = ({
  onChange,
  total = 0,
  page = 1,
  count = 10,
  setPage,
  setCount
}) => (
  <TablePagination
    labelRowsPerPage={"Images per page"}
    component="div"
    onChange={onChange}
    count={total}
    rowsPerPage={count}
    page={page}
    onChangePage={(e, p) => setPage(p)}
    onChangeRowsPerPage={e => setCount(e.target.value)}
  />
);
