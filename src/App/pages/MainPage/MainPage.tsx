import React, { useEffect } from "react";

import Card from "@components/Card";
import { MainPageStore } from "@store/MainPageStore";
import { ProductItems } from "@utils/productsTypes";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const mainPageStore = useLocalStore(() => new MainPageStore());

  useEffect(() => {
    mainPageStore.getProducts();
  }, [mainPageStore]);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.title_block}>
          <h2 className={styles.title_block__title}>Products</h2>
          <p className={styles.title_block__description}>
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div className={styles.search_block}>
          <input
            className={styles.search_block__input}
            type="text"
            placeholder="Search property"
          />
          <div className={styles.search_block__filter_button}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 2.625H23.25C24.625 2.625 25.75 3.75 25.75 5.125V7.875C25.75 8.875 25.125 10.125 24.5 10.75L19.125 15.5C18.375 16.125 17.875 17.375 17.875 18.375V23.75C17.875 24.5 17.375 25.5 16.75 25.875L15 27C13.375 28 11.125 26.875 11.125 24.875V18.25C11.125 17.375 10.625 16.25 10.125 15.625L5.375 10.625C4.75 10 4.25 8.875 4.25 8.125V5.25C4.25 3.75 5.375 2.625 6.75 2.625Z"
                stroke="#151411"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6625 2.625L7.5 12.5"
                stroke="#151411"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filter
          </div>
        </div>
        <div className={styles.content_block}>
          <h2 className={styles.content_block__title}>
            Total Product
            <span className={styles.title__sub}>{mainPageStore.totalRes}</span>
          </h2>

          <InfiniteScroll
            dataLength={mainPageStore.list.length} //This is important field to render the next data
            next={() => mainPageStore.getProducts()}
            hasMore={true}
            loader={<h4>Loading ...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            // }
            // releaseToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            // }
          >
            <div className={styles.product_block}>
              {mainPageStore.list.map((item: ProductItems) => (
                <Card
                  key={item.id}
                  id={item.id}
                  main_image={item.main_image}
                  category={item.category}
                  description={item.description}
                  images={item.images}
                  price={item.price}
                  title={item.title}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default observer(MainPage);
