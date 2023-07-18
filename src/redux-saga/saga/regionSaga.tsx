import { call, put } from "redux-saga/effects";
import region from "@/pages/api/region";
import {
  CreateRegionFail,
  CreateRegionSuccess,
  DeleteRegionSuccess,
  GetRegionFail,
  GetRegionSuccess,
  UpdateRegionFail,
  UpdateRegionSuccess,
} from "../action/regionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(region.GetData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFail(error));
  }
}

function* handleCreateRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.CreateData, payload);
    yield put(CreateRegionSuccess(result));
  } catch (error) {
    yield put(CreateRegionFail(error));
  }
}

function* handleUpdateRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.UpdateData, payload.id, payload.payload);

    yield put(UpdateRegionSuccess(result));
    yield call(handleGetRegion);
  } catch (error) {
    yield put(UpdateRegionFail(error));
  }
}

function* handleDeleteRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.DeleteData, payload);
    yield put(DeleteRegionSuccess(result));
    yield call(handleGetRegion);
  } catch (error) {}
}

export {
  handleGetRegion,
  handleCreateRegion,
  handleUpdateRegion,
  handleDeleteRegion,
};
