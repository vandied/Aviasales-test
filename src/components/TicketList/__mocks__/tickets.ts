import { ITicket } from '../../../types';

export const mockTicket = {
    price: 13400,
    carrier: 's7airlines',
    segments: [
        {
            origin: 'MOV',
            destination: 'HKT',
            date: '10:45',
            stops: ['HKG', 'JNB'],
            duration: 3,
        },
        {
            origin: 'HKT',
            destination: 'MOV',
            date: '11:20',
            stops: ['HKG'],
            duration: 3,
        },
    ],
};

export const mockTicketList: ITicket[] = new Array(5).fill(mockTicket);
