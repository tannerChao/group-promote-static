import { createActions } from "redux-actions";
import { FETCH_SUCCESS, FETCH_FAILE } from "../utils";

export default createActions({
    [FETCH_SUCCESS]: (state) => state,
    [FETCH_FAILE]: state => state,
})
