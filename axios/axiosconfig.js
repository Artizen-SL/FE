import axios from "axios";
// import * as Sentry from "@sentry/react-native";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  baseURL: BASE_URL,
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
    if (throwWhenError) throw error;
  }
};

// Post/Put/Delete Request
// export const request = async ({
//   method,
//   url,
//   throwWhenError = false,
//   payload,
// }) => {
//   try {
//     const response = await http[method](url, payload);
//     return response;
//   } catch (error) {
//     Sentry.captureException(error);
//     if (throwWhenError) throw error;
//   }
// };
