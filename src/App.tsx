import React, { FC } from 'react';
import Logo from '/assets/images/logo.svg';
import css from './styles/styles.css';
import { TransferFilter, TicketToggle, TicketList } from './components';

export const App: FC = () => (
    <div className={css.searchingRoot}>
        <img src={Logo} alt="logo" className={css.searchingLogo} />
        <div className={css.searchingPage}>
            <TransferFilter />
            <div className={css.searchingResults}>
                <TicketToggle />
                <TicketList />
            </div>
        </div>
    </div>
);
