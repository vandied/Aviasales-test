import React, { FC } from 'react';
import Logo from '/assets/images/logo.svg';
import { observer } from 'mobx-react';
import css from './styles/styles.css';
import { createStore, StoresContext } from './shared/entities';
import { ApiContext, createApi } from './shared/api';
import { SearchingPage } from './components/SearchingPage';

export const App: FC = observer(() => {
    const api = createApi({
        baseUrl: 'https://front-test.beta.aviasales.ru',
    });
    const stores = createStore(api);

    return (
        <ApiContext.Provider value={api}>
            <StoresContext.Provider value={stores}>
                <div className={css.searchingRoot}>
                    <img src={Logo} alt="logo" className={css.searchingLogo} />
                    <SearchingPage />
                </div>
            </StoresContext.Provider>
        </ApiContext.Provider>
    );
});
