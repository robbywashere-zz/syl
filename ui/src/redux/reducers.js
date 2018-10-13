import {
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_SUCCESS,
  FETCHING
} from "./actions";

const defaultState = {
  photos: [],
  total: 0,
  loading: false
};
export const api = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.total,
        photos: action.photos
      };

    case FETCH_PHOTOS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case FETCHING:
      return { ...state, loading: true, error: null };
  }
  return state;
};
