import React, { useContext, useState } from "react";
import { AppContext } from "../../../AppContext";
import styles from "../styles.module.scss";

const PepCo: React.FC = () => {
  const { handleShopClick: takeShopID, activeShop } = useContext(AppContext);

  const [isActive, setIsActive] = useState(false);

  const handleShopClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    takeShopID(event);
    if (activeShop === "PepCo") {
      setIsActive((previousIsActiveValue) => !previousIsActiveValue);
    } else {
      setIsActive(true);
    }
  };

  const closeShopInfo = () => {
    setIsActive(false);
  };

  return (
    <>
      <g
        id="PepCo"
        onClick={handleShopClick}
        className={isActive && activeShop === "PepCo" ? styles.active : ""}
        style={{ fill: "#fff", stroke: `${isActive && activeShop === "PepCo" ? "gold" : "black"}`, strokeWidth: "0.5px" }}
      >
        <path
          id="PepCoUp"
          d="M474,272l-73,0l20,40l73,0l-20,-40Z"
        />
        <rect
          x="421"
          y="312"
          width="73"
          height="10"
        />
        <path
          id="PepCoSide"
          d="M401,272l0,10l20,40l0,-10l-20,-40Z"
        />
      </g>
      {isActive && activeShop === "PepCo" && (
        <g id="PepCoInfo">
          <path
            id="PepCoBorder"
            d="M532,131l-165,0l0,119l69.181,0l13.632,14l12.425,-14l69.762,0l0,-119Z"
            style={{ fill: "#fff", stroke: "#fd8900", strokeWidth: "0.5px" }}
          />
          <g id="PepCoText" transform="matrix(1,0,0,1,-370,-53)">
            <text
              x="762.293px"
              y="221.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "12px",
              }}
            >
              Pepco
            </text>
            <text
              x="762.293px"
              y="244.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "11px",
              }}
            >
              Godziny otwarcia:
            </text>
            <text
              x="762.293px"
              y="255.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "11px",
              }}
            >
              pon - sb: 08:30 - 20:00
            </text>
            <text
              x="762.293px"
              y="266.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "11px",
              }}
            >
              niedziela handlowa
            </text>
            <text
              x="762.293px"
              y="277.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "11px",
              }}
            >
              10:00 - 19:00
            </text>
          </g>
          <text
            onClick={closeShopInfo}
            id="X10"
            x="507.293px"
            y="151.355px"
            style={{
              fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            X
          </text>
        </g>
      )}
    </>
  );
};

export default PepCo;