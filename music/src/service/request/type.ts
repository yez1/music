import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors<T = AxiosResponse>{
    requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestFailureFn?: (error: any) => any;
    responseSuccessFn?: (response: T) => T;
    responseFailureFn?: (error: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig{
    interceptors?:RequestInterceptors<T>;
}