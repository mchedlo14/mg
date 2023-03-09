import axios from "axios";
import Cookies from "js-cookie";

const baseURL = `${import.meta.env.VITE_BASE_URL}/api/`;

const authTokens = Cookies.get("authTokens") ? Cookies.get("authTokens") : null;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${authTokens}`,
        "Content-type": "multipart/form-data",
        "X-requested-With": "XMLHttpRequest",
    },
    // withCredentials: true,
});

export const axiosUnAuthorizedWithImg = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
    },
});

export const axiosUnAuthorized = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(async (req) => {
    if (!authTokens) {
        const authTokens = Cookies.get("authTokens")
            ? Cookies.get("authTokens")
            : null;
        req.headers.Authorization = `Bearer ${authTokens}`;
    }
    return req;
});

export default axiosInstance;
