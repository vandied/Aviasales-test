import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { TicketList, TicketToggle, TransferFilter } from '../index';
import { useStores } from '../../shared/entities';
import css from './styles.css';

export const SearchingPage = observer(() => {
    const { SearchingStore: store } = useStores();

    useEffect(() => {
        if (!store.isLoadingId) {
            store.fetchTickets();
        }
    }, [store.isLoadingId]);

    return (
        <div className={css.searchingPage}>
            <TransferFilter />
            <div className={css.searchingResults}>
                <TicketToggle />
                <TicketList />
            </div>
        </div>
    );
});
