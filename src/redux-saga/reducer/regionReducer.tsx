import * as ActionType from "../constant/regionConstant";

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQ:
      return { ...state };
    case ActionType.GET_DATA_OK:
      return GetRegion(state, action);
    case ActionType.CREATE_DATA_REQ:
      return { ...state };
    case ActionType.CREATE_DATA_OK:
      return CreateRegion(state, action);
    case ActionType.UPDATE_DATA_REQ:
      return { ...state };
    case ActionType.UPDATE_DATA_OK:
      return UpdateRegion(state, action);
    case ActionType.DELETE_DATA_REQ:
      return { ...state };
    case ActionType.DELETE_DATA_OK:
      return DeleteRegion(state);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const CreateRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const UpdateRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const DeleteRegion = (state: any) => {
  return {
    ...state,
    regions: [...state.regions],
  };
};

export default RegionReducer;
