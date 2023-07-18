import { takeEvery, all } from "redux-saga/effects";
import * as ActionRegion from "../constant/regionConstant";
import {
  handleCreateRegion,
  handleDeleteRegion,
  handleGetRegion,
  handleUpdateRegion,
} from "./regionSaga";
function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_DATA_REQ, handleGetRegion),
    takeEvery(ActionRegion.CREATE_DATA_REQ, handleCreateRegion),
    takeEvery(ActionRegion.UPDATE_DATA_REQ, handleUpdateRegion),
    takeEvery(ActionRegion.DELETE_DATA_REQ, handleDeleteRegion),
  ]);
}

export default watchAll;
