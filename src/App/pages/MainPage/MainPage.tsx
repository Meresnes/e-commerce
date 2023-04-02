import React, { useEffect } from "react";

import { MainPageStore } from "@store/MainPageStore/";
import { Meta } from "@utils/meta";
import { ProductItems } from "@utils/productsTypes";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import Card from "./components/Card/";
import styles from "./MainPage.module.scss";

const MainPage = () => {
    const mainPageStore = useLocalStore(() => new MainPageStore());

    useEffect(() => {
        mainPageStore.getProducts();
    }, [mainPageStore]);

    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <div className={styles.header__logo_block}>
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_2356)">
                                <path d="M42 0H0V42H42V0Z" fill="white" />
                                <path
                                    d="M32.9034 20.6011L31.9654 24.1011H13.6534L8.66943 5.50562H12.2954L16.3379 20.6011H32.9034Z"
                                    fill="#AD7E5C"
                                />
                                <path
                                    d="M31.4019 26.2009L30.4639 29.7009H9.60743L8.66943 26.2009H31.4019Z"
                                    fill="#518581"
                                />
                                <path
                                    d="M29.9003 31.801L28.9623 35.301H14.5913L13.6533 31.801H29.9003Z"
                                    fill="#A6D8D1"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2356">
                                    <rect width="42" height="42" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className={styles.header__logo_text}>Lalasia</h2>
                    </div>
                </Link>
                <div className={styles.header__menue_block}>
                    <Link to="/">
                        <p className={styles.menue_block__item}>Products</p>
                    </Link>
                    <Link to="/">
                        <p className={styles.menue_block__item}>Categories</p>
                    </Link>
                    <Link to="/">
                        <p className={styles.menue_block__item}>About Us</p>
                    </Link>
                </div>
                <div className={styles.header__user_block}>
                    <Link to="/">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.375 9.58739V8.37489C9.375 5.56239 11.6375 2.79989 14.45 2.53739C17.8 2.21239 20.625 4.84989 20.625 8.13739V9.86239"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.25 27.5H18.75C23.775 27.5 24.675 25.4875 24.9375 23.0375L25.875 15.5375C26.2125 12.4875 25.3375 10 20 10H10C4.66253 10 3.78753 12.4875 4.12503 15.5375L5.06253 23.0375C5.32503 25.4875 6.22503 27.5 11.25 27.5Z"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19.3691 15H19.3803"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.6181 15H10.6294"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                    <Link to="/">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M25.7377 27.5C25.7377 22.6625 20.9252 18.75 15.0002 18.75C9.07519 18.75 4.2627 22.6625 4.2627 27.5"
                                stroke="#151411"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </header>
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
                        Total Product <span className={styles.title__sub}>337</span>
                    </h2>
                    <div className={styles.content_block}>

                        {mainPageStore.meta === Meta.success &&
                            mainPageStore.list.map((item: ProductItems) => (
                                <Card key={item.id} id={item.id}
                                    main_image={item.main_image}
                                    category={item.category}
                                    images={item.images}
                                    price={item.price}
                                    title={item.title} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(MainPage);
