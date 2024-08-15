"use server";

import axios from "axios";
import {cookies} from "next/headers";
import {refreshAccessToken} from "@/lib/action";
import {NextResponse} from "next/server";

const config = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // timeout: 5000,
};

const http = axios.create(config);

const onRequest = async (config) => {
    let accessToken = cookies().get("access-token")?.value;
    const refreshToken = cookies().get("refresh-token")?.value;

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
