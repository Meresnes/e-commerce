import React from "react";

import cn from "classnames";

import styles from "./Dropdown.module.scss";

type DropdownProps = {
  isOpen: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({ isOpen }: DropdownProps) => {
  return (
    <>
      <div className={cn(styles.dropdown_menue, isOpen ? styles.open : "")}>
        <div className={styles.dropdown_menue__item}>Foood</div>
        <div className={styles.dropdown_menue__item}>Foood</div>
        <div className={styles.dropdown_menue__item}>Foood</div>
        <div className={styles.dropdown_menue__item}>Foood</div>
      </div>
    </>
  );
};

export default Dropdown;
