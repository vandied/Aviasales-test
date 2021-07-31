import React, { FC } from 'react';
import { ITicketSegment } from '../../../../types';
import css from './styles.css';

interface Props {
    segment: ITicketSegment;
}

export const TicketSegment: FC<Props> = ({ segment }) => {
    const stopsCountSuffix = segment.stops.length === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ';

    const segmentInfo = {
        route: {
            title: `${segment.origin} - ${segment.destination}`,
            details: segment.date,
        },
        length: { title: 'В ПУТИ', details: segment.duration },
        stops: {
            title: `${segment.stops.length} ${stopsCountSuffix}`,
            details: segment.stops.join(', '),
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
