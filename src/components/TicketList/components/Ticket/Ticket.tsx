import React, { FC, ReactElement } from 'react';
import { ITicket, ITicketSegment } from '../../../../types';
import { TicketSegment } from '../TicketSegment/TicketSegment';
import css from './styles.css';
import MockImg from './s7.svg';

interface Props {
    ticket: ITicket;
}

export const Ticket: FC<Props> = ({ ticket }) => {
    const segmentForward = ticket.segments[0];
    const segmentBack = ticket.segments[1];

    return (
        <div className={css.ticket}>
            <div className={css.ticketHeader}>
                <div className={css.ticketPrice}>{ticket.price}</div>
                <div className={css.ticketLogo}>
                    <img src={MockImg} alt="s7logo" />
                </div>
            </div>
            <TicketSegment segment={segmentForward} />
            <TicketSegment segment={segmentBack} />
        </div>
    );
};
