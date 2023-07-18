import * as ActionRegion from "../constant/regionConstant";

export const GetRegionReq = () => ({
  type: ActionRegion.GET_DATA_REQ,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionRegion.GET_DATA_OK,
  payload,
});

export const GetRegionFail = (payload: any) => ({
  type: ActionRegion.GET_DATA_FAIL,
  payload,
});

export const CreateRegionReq = (payload: any) => ({
  type: ActionRegion.CREATE_DATA_REQ,
  payload,
});

export const CreateRegionSuccess = (payload: any) => ({
  type: ActionRegion.CREATE_DATA_OK,
  payload,
});

export const CreateRegionFail = (payload: any) => ({
  type: ActionRegion.CREATE_DATA_FAIL,
  payload,
});

export const UpdateRegionReq = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_REQ,
  payload,
});

export const UpdateRegionSuccess = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_OK,
  payload,
});

export const UpdateRegionFail = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_FAIL,
  payload,
});

export const DeleteRegionReq = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_REQ,
  payload,
});

export const DeleteRegionSuccess = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_OK,
  payload,
});

export const DeleteRegionFail = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_FAIL,
  payload,
});
