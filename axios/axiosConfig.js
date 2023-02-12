import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import * as Sentry from "@sentry/react-native";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
const config = {
  baseURL: BASE_URL,
  headers: {
    Authorization: "",
  },
};

const http = axios.create(config);

http.interceptors.request.use(async function (config) {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");

    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = accessToken;
    // console.log("config===>", config);
    return config;
  } catch (error) {
    // console.log("intercpetor error", error);
    return config;
  }
});

// Get Request
export const getRequest = async ({
  method,
  url,
  throwWhenError = false,
  params,
}) => {
  try {
    const response = await http[method](url, { params });
    return response;
  } catch (error) {
    // Sentry.captureException(error);
    console.log("getRequest", error);
    if (throwWhenError) throw error;
  }
};

// Get Request infinite
export const getRequestInfinite = async ({
  method,
  url,
  throwWhenError = false,
  params,
  pageParams = 0,
}) => {
  try {
    const response = await http[method](url, { params });
    return response;
  } catch (error) {
    // Sentry.captureException(error);
    if (throwWhenError) throw error;
  }
};

// Post/Put/Delete Request
export const request = async ({
  method,
  url,
  throwWhenError = false,
  payload,
}) => {
  try {
    const response = await http[method](url, payload);
    return response;
  } catch (error) {
    // Sentry.captureException(error);
    console.log(error);
    if (throwWhenError) throw error;
  }
};

export const multipartRequest = async ({
  method,
  url,
  throwWhenError = false,
  payload,
}) => {
  try {
    const response = await http[method](url, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    // Sentry.captureException(error);
    console.log(error);
    if (throwWhenError) throw error;
  }
};
