import React, { FC } from 'react';
import { mockTicketList } from './__mocks__/tickets';
import { Ticket } from './components/Ticket';

export const TicketList: FC = () => {
    const tickets = mockTicketList;
    return (
        <>
            {tickets.map((ticket) => (
                <Ticket key={ticket.carrier} ticket={ticket} />
            ))}
        </>
    );
};
