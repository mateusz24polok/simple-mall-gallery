import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { SelectActiveShop, changeActiveShop } from "../../slices/ShopSlice";

interface ShopProps {
  name: string;
  SVGShopElement: React.ReactElement;
  SVGShopInfo: React.ReactElement;
}

const Shop: React.FC<ShopProps> = ({ name, SVGShopElement, SVGShopInfo }) => {
  const activeShop = useSelector(SelectActiveShop);
  const dispatch = useDispatch();

  const handleShopClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (activeShop === name) {
      dispatch(changeActiveShop(""));
    } else {
      dispatch(changeActiveShop(name));
    }
  };

  return (
    <>
      <svg
        id={name}
        onClick={handleShopClick}
        className={activeShop === name ? styles.active : ""}
        style={{
          fill: "#fff",
          stroke: `${activeShop === name ? "gold" : "black"}`,
          strokeWidth: "0.5px",
        }}
      >
        {SVGShopElement}
      </svg>
      {activeShop === name && <svg>{SVGShopInfo}</svg>}
    </>
  );
};

export default Shop;
