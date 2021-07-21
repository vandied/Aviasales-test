import React, { FC } from 'react';
import css from './styles/styles.css';
import { TransferFilter } from './components/TransferFilter';
import { TicketToggle } from './components/TicketToggle';

export const App: FC = () => (
    <div className={css.searchingPage}>
        <TransferFilter />
        <div>
            <TicketToggle />
            <div>Список билетов</div>
        </div>
    </div>
);
