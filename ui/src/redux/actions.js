export const FETCHING = "FETCHING";
export const fetchRequest = () => ({
  type: FETCHING,
  total: 0,
  loading: true
});

export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const fetchPhotosSuccess = data => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos: data.images,
  total: data.total,
  loading: false
});

export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";
export const fetchPhotosFailure = (error = "Error fetching photos") => ({
  type: FETCH_PHOTOS_FAILURE,
  loading: false,
  error
});
