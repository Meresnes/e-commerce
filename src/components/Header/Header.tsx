import React from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
