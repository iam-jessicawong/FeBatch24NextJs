import axios from "axios";
import config from "@/config/config";

const GetData = async () => {
    try {
        const result = await axios.get(`${config.domain}/regions`)
        return result.data
    } catch (error) {
        return error
    }
}

export default {
    GetData
}