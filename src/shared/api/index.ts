/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createContext, useContext } from 'react';
import { Request } from '../../utils/Request';
import { SearchingApi } from './searching';

export const createApi = ({
    baseUrl,
    apiEndpoint,
}: {
    baseUrl: string;
    apiEndpoint?: string;
}) => {
    const apiUrl = `${baseUrl}${apiEndpoint ? `/${apiEndpoint}` : ''}`;
    const request = new Request({ baseUrl: apiUrl });

    return {
        /** Searching service api */
        search: new SearchingApi({ request }),
    };
};

export type Api = ReturnType<typeof createApi>;

export const ApiContext = createContext<Api | null>(null);

export const useApi = (): Api => {
    const api = useContext(ApiContext);

    if (!api) {
        throw new Error('useApi() следует использовать внутри <ApiContext.provider />');
    }

    return api;
};
