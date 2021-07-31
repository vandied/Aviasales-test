import React, { FC } from 'react';
import css from './styles.css';
import { transferOptions } from './consts';

export const TransferFilter: FC = () => (
    <div className={css.transferContainer}>
        <p className={css.titleContainer}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        {transferOptions.map((opt) => (
            <div className={css.transferItem} key={opt.id}>
                <input type="checkbox" id={String(opt.id)} />
                <label htmlFor={String(opt.id)}>{opt.title}</label>
            </div>
        ))}
    </div>
);
