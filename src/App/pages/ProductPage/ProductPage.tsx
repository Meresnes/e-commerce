import React, { useEffect } from "react";

import { ProductPageStore } from "@store/ProductPageStore";
import { Meta } from "@utils/meta";
import { useLocalStore } from "@utils/useLocalStore";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import RelatedBlock from "./components/RelatedBlock";
import styles from "./ProductPage.module.scss";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const productStore = useLocalStore(() => new ProductPageStore());

  useEffect(() => {
    productStore.setId(String(id));
    productStore.getProduct();
  }, [productStore, id]);

  return (
    <>
      <div className={styles.main_container}>
        {productStore.meta === Meta.success && (
          <div className={styles.product_container}>
            <div className={styles.product_container__image}>
              <img
                src={productStore.list.main_image}
                alt={productStore.list.title}
              />
            </div>
            <div className={styles.product_container__text}>
              <h2 className={styles.product_container__text__title}>
                {productStore.list.title}
              </h2>
              <p className={styles.product_container__text__description}>
                {productStore.list.description}
              </p>
              <h2 className={styles.product_container__text__title}>
                {productStore.list.price}$
              </h2>
              <div className={styles.button_block}>
                <button
                  className={cn(
                    styles.button_block__buy,
                    styles.button_block_button
                  )}
                >
                  Buy Now
                </button>
                <button
                  className={cn(
                    styles.button_block__cart,
                    styles.button_block_button
                  )}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
        <RelatedBlock
          images={productStore.list.images}
          category={productStore.list.category}
        />
      </div>
    </>
  );
};

export default observer(ProductPage);
