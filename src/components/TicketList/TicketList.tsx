import React, { FC } from 'react';
import { mockTicketList } from './__mocks__/tickets';
import { Ticket } from './components/Ticket';
import css from './styles.css';

export const TicketList: FC = () => {
    const tickets = mockTicketList;
    return (
        <>
            {tickets.map((ticket, i) => (
                // тут, наверное на реальных данных, у всех вариантов перелета есть какие-то уникальные id,
                // которые можно использовать как key, сейчас я бы уточнила, какие поля можно использовать
                // для генерациии уникального ключа элемента списка
                <Ticket key={`${ticket.carrier}-${i}`} ticket={ticket} />
            ))}
            <button className={css.showMoreBtn}>Показать еще 5 билетов!</button>
        </>
    );
};
