import React, { FC } from 'react';
import { ITicket } from '../../../../types';
import { TicketSegment } from '../TicketSegment';
import css from './styles.css';

interface Props {
    ticket: ITicket;
}

export const Ticket: FC<Props> = ({ ticket }) => {
    const segmentForward = ticket.segments[0];
    const segmentBack = ticket.segments[1];

    return (
        <div className={css.ticket}>
            <div className={css.ticketHeader}>
                <div className={css.ticketPrice}>
                    {ticket.price.toLocaleString().toLocaleUpperCase()} P
                </div>
                <div className={css.ticketLogo}>
                    <img
                        src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
                        alt="s7logo"
                    />
                </div>
            </div>
            <TicketSegment segment={segmentForward} />
            <TicketSegment segment={segmentBack} />
        </div>
    );
};
