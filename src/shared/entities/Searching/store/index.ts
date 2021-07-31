import { makeObservable, observable } from 'mobx';
import { Api } from '../../../api';
import { ITicket } from '../../../../types';

export class SearchingStore {
    private readonly api: Api;
    private _searchId: string | undefined;

    public isLoadingId = false;
    public ticketList: ITicket[] = [];

    public constructor({ api }: { api: Api }) {
        makeObservable(this, {
            isLoadingId: observable,
            ticketList: observable,
        });

        this.api = api;
        this.getSearchId();
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

    public async getTickets(): Promise<void> {
        if (this._searchId) {
            await this.api.search.getTickets(this._searchId);
        }
    }
}
