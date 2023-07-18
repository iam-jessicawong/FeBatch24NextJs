import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
  try {
    const result = await axios.get(`${config.domain}/regions`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const CreateData = async (data: any) => {
  try {
    const result = await axios.post(`${config.domain}/regions/upload`, data);
    return result.data;
  } catch (error) {
    return error;
  }
};

const UpdateData = async (id: number, data: any) => {
  try {
    const result = await axios.put(`${config.domain}/regions/${id}`, data);
    return result.data;
  } catch (error) {
    return error;
  }
};

const DeleteData = async (id: number) => {
  try {
    const result = await axios.delete(`${config.domain}/regions/${id}`);
  } catch (error) {
    return error;
  }
};

export default {
  GetData,
  CreateData,
  DeleteData,
  UpdateData,
};
