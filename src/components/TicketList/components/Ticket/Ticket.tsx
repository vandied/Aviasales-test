import React, { FC } from 'react';
import { ITicket } from '../../../../types';
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
                <div className={css.ticketPrice}>{ticket.price}</div>
            </div>
            <div className={css.ticketSegmentForward}>{segmentForward.origin}</div>
            <div className={css.ticketSegmentBack}>{segmentBack.origin}</div>
        </div>
    );
};
