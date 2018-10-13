import axios from "axios";
import { fetchPhotosSuccess, fetchPhotosFailure } from "./actions";

//const URL = "http://localhost:8000";
const URL = "";

export const fetchPhotos = ({ q, offset = 0, count = 10 }) => dispatch => {
  const opts = { paginate: true, offset, count };
  return axios
    .get(`${URL}/photos`, { params: { ...opts, q } })
    .then(
      ({ data }) => dispatch(fetchPhotosSuccess(data)),
      error => dispatch(fetchPhotosFailure(error))
    );
};
