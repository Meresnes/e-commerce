import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";

export type CardProps = {
  id: number;
  main_image: string;
  category: string;
  description: string;
  isInSwiper?: boolean;
  images: string[];
  price: number;
  title: string;
};

const Card: React.FC<CardProps> = ({
  id,
  main_image,
  category,
  images,
  description,
  isInSwiper = false,
  price,
  title,
}: CardProps) => {
  const navigate = useNavigate();

  const onClickHandelr = () => {
    window.scrollTo({
      top: 10,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div
        className={styles.card}
        onClick={() => onClickHandelr()}
        style={isInSwiper ? { margin: "50px auto" } : { margin: "" }}
      >
        <img className={styles.card__image} src={main_image} alt={category} />
        <p className={styles.card__description}>{category}</p>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>
          {description.length > 30
            ? `${description.slice(0, 30)}...`
            : description}
        </p>
        <div className={styles.card__footer}>
          <span className={styles.card__footer__price}>{price}$</span>
        </div>
      </div>
    </>
  );
};

export default Card;
