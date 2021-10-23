import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import React from 'react';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);

  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);

  return Promise.reject(error);
};

export const axiosInstance = () => {
  const Instance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
  });
  Instance.interceptors.request.use(onRequest, onRequestError);
  Instance.interceptors.response.use(onResponse, onResponseError);

  return Instance;
};
