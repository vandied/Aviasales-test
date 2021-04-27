import React, { FC } from 'react';
import css from './styles/styles.css';

export const App: FC = () => (
    <div className={css.searchingPage}>
        <div>фильтр пересадок</div>
        <div>
            <div>Фильтр цены</div>
            <div>Список билетов</div>
        </div>
    </div>
);
