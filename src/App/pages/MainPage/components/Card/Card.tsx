import React from "react";

import styles from "./Card.module.scss";
import { ProductItems } from "@utils/productsTypes";


export type CardProps = {
    id: number;
    main_image: string;
    category: string;
    images: string[];
    price: number;
    title: string;
}

const Card = ({ id, main_image, category, images, price, title }: CardProps) => {

    return (
        <>
            <div className={styles.card}>
                <img className={styles.card__image} src={main_image} alt={category} />
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{category}</p>
                <div className={styles.card__footer}>
                    <span className={styles.card__footer__price}>{price}$</span>
                </div>
            </div>
        </>
    );
};

export default Card;
