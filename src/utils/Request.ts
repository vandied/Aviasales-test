import { setup } from 'axios-cache-adapter';
import { AxiosInstance, AxiosResponse } from 'axios';

export interface Logger {
    response(r: AxiosResponse): void;
    error(error: any): void;
}

export type RequestOptions = {
    method: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT';
    url: string;
    headers: {
        [header: string]: string | number | undefined;
    };
    data?: any;
    params?: any;
};

export type RequestConfig = {
    baseUrl?: string;
    headers?: { [header: string]: string | number | undefined };
};

export class Request {
    private readonly axios: AxiosInstance;

    constructor(options: RequestConfig = {}) {
        this.axios = setup({
            baseURL: options.baseUrl || 'http://localhost',
            headers: {
                Accept: 'application/json',
                ...options.headers,
            },
        });
    }

    public async request<
        T extends {
            requestOptions: Omit<RequestOptions, 'headers'>;
            response: any;
        }
    >(options: T['requestOptions']): Promise<T['response']> {
        try {
            const response = await this.axios.request<T['response']>(options);

            return response.data;
        } catch (error) {
            console.error(error.response?.data);
            throw error;
        }
    }
}
