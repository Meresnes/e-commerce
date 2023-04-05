import React, { useEffect } from "react";

import Card from "@components/Card";
import { MainPageStore } from "@store/MainPageStore";
import { Categories } from "@utils/categories";
import { Meta } from "@utils/meta";
import { ProductItems } from "@utils/productsTypes";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
//doc: https://swiperjs.com/react
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Swiper.scss";
import styles from "./RelatedBlock.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";

type RelatedBlockProps = {
  images: string[];
  category: Categories;
};

const RelatedBlock: React.FC<RelatedBlockProps> = ({
  images,
  category,
}: RelatedBlockProps) => {
  const relatedBlockStore = useLocalStore(() => new MainPageStore());

  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      890: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  SwiperCore.use([EffectCoverflow, Pagination]);

  useEffect(() => {
    relatedBlockStore.setCategory(category);
    relatedBlockStore.getProducts();
  }, [relatedBlockStore, category]);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container__titie}>Related Items</h2>
        <div className={styles.container__carousel_block}>
          {relatedBlockStore.meta === Meta.success && (
            <Swiper
              spaceBetween={50}
              {...swiperParams}
              effect={"coverflow"}
              grabCursor={true}
              coverflowEffect={{
                rotate: 25,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              {relatedBlockStore.list.map((item: ProductItems) => (
                <SwiperSlide>
                  <Card
                    key={item.id}
                    id={item.id}
                    isInSwiper={true}
                    main_image={item.main_image}
                    category={item.category}
                    description={item.description}
                    images={item.images}
                    price={item.price}
                    title={item.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default observer(RelatedBlock);
