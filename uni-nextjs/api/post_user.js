import { headers } from "../next.config";
import axiosInstance from "./client";

const post_user = async (user) => {
   const u = await axiosInstance.post('/user', user)
   return u
}

export default post_user;