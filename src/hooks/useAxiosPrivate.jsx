import { axiosPrivate } from "../Api/Api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../features/user/userSlice";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = useSelector(selectAccessToken);
  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
          config.withCredentials = true;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.data?.statusCode === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [accessToken, refresh]);


  return axiosPrivate;
};

export default useAxiosPrivate;
