import { Request } from '../../../utils/Request';
import { ITicket } from '../../../types';

export class SearchingApi {
    private readonly request: Request;
    private readonly fetch: Request['request'];

    constructor({ request }: { request: Request }) {
        this.request = request;
        this.fetch = this.request.request.bind(this.request);
    }

    async getSearchId(): Promise<string> {
        const { searchId } = await this.fetch({
            method: 'GET',
            url: '/search',
        });
        return searchId;
    }

    async getTickets(searchId: string): Promise<{ tickets: ITicket[]; stop: boolean }> {
        return this.fetch({
            method: 'GET',
            url: '/tickets',
            params: { searchId },
        });
    }
}
