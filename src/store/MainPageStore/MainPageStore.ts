import { Categories, categoryNormalizer } from "@utils/categories";
import { Meta } from "@utils/meta";
import { ProductItems, normolizeProducts } from "@utils/productsTypes";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
  makeObservable,
  runInAction,
  observable,
  computed,
  action,
} from "mobx";

type PrivateFields = "_list" | "_meta" | "_offset" | "_totalRes" | "_category";

const BASE_URL = "https://api.escuelajs.co/api/v1/products/";

export class MainPageStore implements ILocalStore {
  private _list: ProductItems[] = [];
  private _meta: Meta = Meta.initial;
  private _offset: number = 0;
  private _category: Categories = Categories.Empty;
  private _totalRes: number = 0;

  constructor() {
    makeObservable<MainPageStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable.ref,
      _offset: observable,
      _totalRes: observable.ref,
      _category: observable.ref,
      list: computed,
      meta: computed,
      category: computed,
      totalRes: computed,
      setCategory: action,
      getProducts: action,
    });
  }

  get list(): ProductItems[] {
    return this._list;
  }
  get meta(): Meta {
    return this._meta;
  }
  get category(): Categories {
    return this._category;
  }
  get totalRes(): number {
    return this._totalRes;
  }

  setCategory(category: Categories) {
    this._category = category;
  }

  async getProducts() {
    this._meta = Meta.loading;
    const categoryUrl =
      this._category !== Categories.Empty
        ? `?offset=0&limit=10&categoryId=${categoryNormalizer(this._category)}`
        : `?offset=${this._offset}&limit=6`;

    try {
      const response = await axios({
        method: "GET",
        headers: {},
        data: {},
        url: `${BASE_URL}${categoryUrl}`,
      });

      runInAction(() => {
        if (response.status === 200) {
          this._list.push(...response.data.map(normolizeProducts));
          this._meta = Meta.success;
          this._totalRes = this._list.length;
          this._offset = this._offset + 6;
        } else {
          this._meta = Meta.error;
        }
      });
    } catch (e) {
      this._meta = Meta.error;
    }
  }

  destroy(): void {}
}
