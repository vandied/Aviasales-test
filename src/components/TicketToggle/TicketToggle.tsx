import React, { FC, ReactElement } from 'react';
import { toggleValues } from './consts';
import css from './styles.css';

export const TicketToggle: FC = () => {
    const toggleItem = (label: string, value: string, id: number): ReactElement => (
        <div className={css.toggleItem} key={id}>
            <input id={`${value}-${id}`} type="radio" name="radio" value={value} />
            <label htmlFor={`${value}-${id}`}>{label}</label>
        </div>
    );

    return (
        <div className={css.toggleGroup}>
            {toggleValues.map(({ title, id, value }) => toggleItem(title, value, id))}
        </div>
    );
};
