import {
  AUTHORS_LIST,
  ERRORS_LIST
} from "./types";
import { createAction } from "redux-actions";
import { useDispatch } from "react-redux";
import * as API from "./api";
import { LocationSearchingTwoTone } from "@material-ui/icons";

const authorsAction = createAction(AUTHORS_LIST);
const errorsAction = createAction(ERRORS_LIST);

export const useActions = () => {
  const dispatch = useDispatch();

  return {
    mostContactedlisting: async () => {
      let response, error;
      try {
        response = await API.authorListing.list();
        dispatch(authorsAction(response));
      } catch (e) {
        console.log(e);
        error = e;
      }
      return { response, error };
    },
    errorListing: async () => {
      let response, error;
      try {
        response = await API.errorListing.list();
        // dispatch(errorsAction(response));
      } catch (e) {
        dispatch(errorsAction(e.response.data.error));
        error = e;
      }
      return { response, error };
    },
  };
};
