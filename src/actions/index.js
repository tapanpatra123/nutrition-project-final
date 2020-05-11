import axios from "axios";
import * as constant from '../utils/constant';
import { Route, Redirect } from 'react-router'
import React, { Component } from 'react';

export const client = axios.create({
    baseURL: constant.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // schema: "exotalentdb",
        schema: JSON.parse(localStorage.getItem('userProfile')) !== null ? JSON.parse(localStorage.getItem('userProfile')).schema : window.location.pathname.split("/")[1]
    },
})

/* Send token to backend for authentication */
client.interceptors.request.use((request) => {
    request.headers['x-auth-token'] = localStorage.getItem("authToken");
    return request;
});