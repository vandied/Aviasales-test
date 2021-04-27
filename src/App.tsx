import React, { FC } from 'react';
import css from './styles/styles.css';
import { TransferFilter } from './components/TransferFilter';

export const App: FC = () => (
    <div className={css.searchingPage}>
        <TransferFilter />
        <div>
            <div>Фильтр цены</div>
            <div>Список билетов</div>
        </div>
    </div>
);
