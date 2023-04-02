import { Meta } from "@utils/meta";
import { ProductItems, normolizeProducts } from "@utils/productsTypes";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
    makeObservable,
    runInAction,
    reaction,
    observable,
    computed,
} from "mobx";

type PrivateFields = "_list" | "_meta";

export class MainPageStore implements ILocalStore {
    private _list: ProductItems[] = [];
    private _meta: Meta = Meta.initial;

    constructor() {
        makeObservable<MainPageStore, PrivateFields>(this, {
            _list: observable.ref,
            _meta: observable.ref,
            list: computed,
        });
    }

    get list(): ProductItems[] {
        return this._list;
    }
    get meta(): Meta {
        return this._meta;
    }

    async getProducts() {
        this._meta = Meta.loading;
        try {
            const response = await axios({
                method: "GET",
                headers: {},
                data: {},
                url: `https://api.escuelajs.co/api/v1/products`,
            });
            runInAction(() => {
                if (response.status === 200) {
                    this._list = response.data.map(normolizeProducts);
                    this._meta = Meta.success;
                } else {
                    this._meta = Meta.error;
                }
            });
        } catch (e) {
            this._meta = Meta.error;
        }
    }

    destroy(): void { }
}
