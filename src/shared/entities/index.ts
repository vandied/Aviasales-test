import { createContext, useContext } from 'react';
import { Api } from '../api';
import { SearchingStore } from './Searching/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const createStore = (api: Api) => ({
    SearchingStore: new SearchingStore({ api }),
});

export type RootStore = ReturnType<typeof createStore>;

export const StoresContext = createContext<RootStore | null>(null);

export const useStores = (): RootStore => {
    const stores = useContext(StoresContext);

    if (!stores) {
        throw new Error(
            'useStores() следует использовать внутри <StoresContext.provider />',
        );
    }

    return stores;
};
