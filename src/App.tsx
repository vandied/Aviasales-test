import React, { FC } from 'react';
import css from './styles/styles.css';
import { TransferFilter, TicketToggle, TicketList } from './components';

export const App: FC = () => (
    <div className={css.searchingPage}>
        <TransferFilter />
        <div className={css.searchingResults}>
            <TicketToggle />
            <TicketList />
        </div>
    </div>
);
