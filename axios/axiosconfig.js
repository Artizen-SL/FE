import axios from "axios";
// import * as Sentry from "@sentry/react-native";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  baseURL: BASE_URL,
});

export const getRequest  = async ({
method,
url,
throwWhenError,
prams,
}) => {
    try{
        const res = await http[method](url,{prams});
        return res;
    } catch(error){
        console.log(error);
        // Sentry.captureException(error);
        // if (throwWhenError) throw error;
    }
};