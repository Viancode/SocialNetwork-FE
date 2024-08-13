"use server";

import axios from "axios";
import {cookies} from "next/headers";
import {refreshAccessToken} from "@/lib/action";

const config = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // timeout: 5000,
};

const http = axios.create(config);

const onRequest = (config) => {
    let accessToken = cookies().get("access-token")?.value;
    if (!accessToken) {
        refreshAccessToken().then(r => {
            if (r.isSuccessful) {
                cookies().set("access-token", r.data.accessToken, {maxAge: process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRY});
                accessToken = r.data.accessToken;
            }
        })
    }

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
    };
    return config;
};

const onRequestError = (error) => {
    return Promise.reject(error);
};

// Request interceptor
http.interceptors.request.use(onRequest, onRequestError);

export default http;
