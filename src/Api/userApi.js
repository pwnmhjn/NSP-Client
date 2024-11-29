
import { ObjectHasValue } from "../utils/ObjectHasValue";
import api from "./Api"


export const registerUser = async (cred) => {
  if (ObjectHasValue(cred)) {
    try {
      const res = await api.post("/users/register", cred);
      const response = res.data;
      return response;
    } catch (error) {
      const response = error.response.data;
      return response;
    }
  } else {
    const response = {
      message: "Some Field are Missing",
    };
    return response;
  }
};

export const logUser = async (cred) => {
  if (ObjectHasValue(cred)) {
    try {
      const res = await api.post("/users/login", cred);


      const response = res.data;
      return response;
    } catch (error) {
      console.log(error);

      const response = error?.response?.data;
      return response;
    }
  } else {
    const response = {
      message: "Some Field are Missing",
    };


    return response;
  }
};

