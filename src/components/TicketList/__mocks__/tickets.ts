import { ITicket } from '../../../types';

export const mockTicket = {
    price: 13400,
    carrier: 's7airlines',
    segments: [
        {
            origin: 'MOV',
            destination: 'HKT',
            date: '"2021-07-31T11:51:55Z"',
            stops: ['HKG', 'JNB'],
            duration: 3,
        },
        {
            origin: 'HKT',
            destination: 'MOV',
            date: '"2021-08-10T11:51:55Z"',
            stops: ['HKG'],
            duration: 3,
        },
    ],
};

export const mockTicketList: ITicket[] = new Array(5).fill(mockTicket);
