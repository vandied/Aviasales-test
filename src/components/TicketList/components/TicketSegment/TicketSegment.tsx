import React, { FC } from 'react';
import { ITicketSegment } from '../../../../types';
import css from './styles.css';

interface Props {
    segment: ITicketSegment;
}

export const TicketSegment: FC<Props> = ({ segment }) => {
    const a;

    return (
        <div className={css.ticketSegment}>
            <div className={css.ticketSegmentInfo}>
                <span className={css.ticketSegmentInfoTitle}>
                    {segment.origin} - {segment.destination}
                </span>
                <span className={css.ticketSegmentInfoDetails}>{segment.date}</span>
            </div>
            <div className={css.ticketSegmentInfo}>
                <span className={css.ticketSegmentInfoTitle}>В ПУТИ</span>
                <span className={css.ticketSegmentInfoDetails}>{segment.duration}</span>
            </div>
            <div className={css.ticketSegmentInfo}>
                <span className={css.ticketSegmentInfoTitle}>
                    {segment.stops.length} ПЕРЕСАДКИ
                </span>
                <span className={css.ticketSegmentInfoDetails}>
                    {segment.stops.join(', ')}
                </span>
            </div>
        </div>
    );
};
