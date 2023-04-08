import { Categories, categoryNormalizer } from "@utils/categories";
import { Meta } from "@utils/meta";
import { ProductItems, normolizeProducts } from "@utils/productsTypes";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import { debounce } from "lodash";
import {
  makeObservable,
  runInAction,
  observable,
  computed,
  action,
  reaction,
  IReactionDisposer,
} from "mobx";

type PrivateFields =
  | "_list"
  | "_meta"
  | "_searchValue"
  | "_offset"
  | "_totalRes"
  | "_category"
  | "_inputChangeReaction";

const BASE_URL = "https://api.escuelajs.co/api/v1/products/";

export class MainPageStore implements ILocalStore {
  private _list: ProductItems[] = [];
  private _meta: Meta = Meta.initial;
  private _searchValue: string = "";
  private _offset: number = 0;
  private _category: Categories = Categories.Empty;
  private _totalRes: number = 0;

  constructor() {
    makeObservable<MainPageStore, PrivateFields>(this, {
      _list: observable,
      _meta: observable.ref,
      _searchValue: observable,
      _offset: observable,
      _totalRes: observable.ref,
      _category: observable.ref,
      list: computed,
      meta: computed,
      searchValue: computed,
      category: computed,
      totalRes: computed,
      setList: action,
      setSearchValue: action,
      setCategory: action,
      getProducts: action,
      _inputChangeReaction: action,
    });
  }

  get list(): ProductItems[] {
    return this._list;
  }
  get meta(): Meta {
    return this._meta;
  }
  get searchValue(): string {
    return this._searchValue;
  }
  get category(): Categories {
    return this._category;
  }
  get totalRes(): number {
    return this._totalRes;
  }

  setList = (arr: ProductItems[]) => {
    this._list = arr;
  };
  setSearchValue = (value: string) => {
    this._searchValue = value;
  };
  setCategory = (category: Categories) => {
    this._category = category;
  };

  async getProducts() {
    this._meta = Meta.loading;
    const categoryUrl =
      this._category !== Categories.Empty
        ? `&offset=0&limit=10&categoryId=${categoryNormalizer(this._category)}`
        : `&offset=${this._offset}&limit=6`;
    const searchUrl = `?title=${this._searchValue}`;
    try {
      const response = await axios({
        method: "GET",
        headers: {},
        data: {},
        url: `${BASE_URL}${searchUrl}${categoryUrl}`,
      });

      runInAction(() => {
        if (response.status === 200 && response.data.length > 0) {
          this._list.push(...response.data.map(normolizeProducts));
          this._meta = Meta.success;
          this._offset = this._offset + 6;
        } else {
          this._meta = Meta.error;
        }
        this._totalRes = this._list.length;
      });
    } catch (e) {
      this._list = [];
      this._meta = Meta.error;
    }
  }

  private readonly _inputChangeReaction: IReactionDisposer = reaction(
    () => this._searchValue,
    debounce(() => {
      runInAction(() => {
        this._offset = 0;
        this.setList([]);
        this.getProducts();
      });
    }, 500)
  );

  destroy(): void {
    // this._inputChangeReaction();
  }
}
