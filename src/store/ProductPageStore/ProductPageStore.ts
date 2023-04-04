import { Meta } from "@utils/meta";
import { ProductItems, normolizeProducts } from "@utils/productsTypes";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

type PrivateFields = "_list" | "_meta" | "_id";

export class ProductPageStore implements ILocalStore {
  private _list: ProductItems = {
    id: 0,
    main_image: "",
    category: "",
    description: "",
    images: [],
    price: 0,
    title: "",
  };
  private _meta: Meta = Meta.initial;
  private _id: string = "";

  constructor() {
    makeObservable<ProductPageStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable.ref,
      _id: observable.ref,
      list: computed,
      meta: computed,
      setId: action,
      getProduct: action,
    });
  }

  get list(): ProductItems {
    return this._list;
  }

  get meta(): Meta {
    return this._meta;
  }

  setId(id: string) {
    this._id = id;
  }

  async getProduct() {
    this._meta = Meta.loading;
    try {
      const response = await axios({
        method: "GET",
        headers: {},
        data: {},
        url: `https://api.escuelajs.co/api/v1/products/${this._id}`,
      });
      runInAction(() => {
        if (response.status === 200) {
          this._list = normolizeProducts(response.data);
          this._meta = Meta.success;
        } else this._meta = Meta.error;
      });
    } catch (e) {
      this._meta = Meta.error;
    }
  }
  destroy(): void {}
}
