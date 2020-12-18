import React from "react";
import Shop from "../../Shop";
import { useDispatch } from "react-redux";
import { changeActiveShop } from "../../../slices/ShopSlice";

const TXM: React.FC = () => {
  const dispatch = useDispatch();
  const closeShopInfo = () => {
    dispatch(changeActiveShop(""));
  };

  return (
    <Shop
      name="TXM"
      SVGShopElement={
        <g>
          <path id="TXMUp" d="M274,272l-54,0l20,40l54,0l-20,-40Z" />
          <rect id="TXMFront" x="240" y="312" width="54" height="10" />
          <path id="TXMSide" d="M220,272l0,10l20,40l0,-10l-20,-40Z" />
        </g>
      }
      SVGShopInfo={
        <g id="TXMInfo">
          <path
            id="TXMBorder"
            d="M340,131l-165,0l0,119l69.181,0l13.632,14l12.425,-14l69.762,0l0,-119Z"
            style={{ fill: "#fff", stroke: "#fd8900", strokeWidth: "0.5px" }}
          />
          <g id="TXMText" transform="matrix(1,0,0,1,-562,-53)">
            <text
              x="762.293px"
              y="221.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "12px",
              }}
            >
              TXM
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
              pon - sb: 09:00 - 20:00
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
            id="X12"
            x="316.293px"
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
      }
    />
  );
};

export default TXM;
