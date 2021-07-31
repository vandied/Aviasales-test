import { computed, makeObservable, observable } from 'mobx';
import { Api } from '../../../api';
import { ITicket } from '../../../../types';

export class SearchingStore {
    private readonly api: Api;
    private _searchId: string | undefined;
    private _stopLoading = false;

    public isLoadingId = false;
    public ticketList: ITicket[] = [];

    public constructor({ api }: { api: Api }) {
        makeObservable(this, {
            isLoadingId: observable,
            ticketList: observable,

            getRenderedTickets: computed,
        });

        this.api = api;
        this.getSearchId();
    }

    public get getRenderedTickets(): ITicket[] {
        return this.ticketList.slice(0, 5);
    }

    private async getSearchId(): Promise<void> {
        this.isLoadingId = true;
        try {
            this._searchId = await this.api.search.getSearchId();
        } catch {
            throw new Error('не удалось получить идентификатор поиска ');
        } finally {
            this.isLoadingId = false;
        }
    }

    public async fetchTickets(): Promise<void> {
        if (this._searchId && !this._stopLoading) {
            const { tickets, stop } = await this.api.search.getTickets(this._searchId);
            this.ticketList = tickets;
            this._stopLoading = stop;
        }
    }
}
