import React, { FC } from 'react';
import { ITicketSegment } from '../../../../types';
import css from './styles.css';
import { getLengthRoute, getRouteTime, stopsCountSuffix } from './helpers';

interface Props {
    segment: ITicketSegment;
}

export const TicketSegment: FC<Props> = ({ segment }) => {
    const segmentInfo = {
        route: {
            title: `${segment.origin} - ${segment.destination}`,
            details: getRouteTime(segment.date, segment.duration),
        },
        length: { title: 'В ПУТИ', details: getLengthRoute(segment.duration) },
        stops: {
            title: stopsCountSuffix(segment.stops.length),
            details: segment.stops.join(', ') || '–',
        },
    };

    return (
        <div className={css.ticketSegment}>
            {Object.keys(segmentInfo).map((item) => (
                <div className={css.ticketSegmentInfo} key={item}>
                    <span className={css.ticketSegmentInfoTitle}>
                        {segmentInfo[item].title}
                    </span>
                    <span className={css.ticketSegmentInfoDetails}>
                        {segmentInfo[item].details}
                    </span>
                </div>
            ))}
        </div>
    );
};
