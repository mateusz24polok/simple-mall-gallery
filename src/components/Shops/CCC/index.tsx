import React from "react";
import Shop from "../../Shop";
import { useDispatch } from "react-redux";
import { changeActiveShop } from "../../../slices/ShopSlice";

const CCC: React.FC = () => {
  const dispatch = useDispatch();
  const closeShopInfo = () => {
    dispatch(changeActiveShop(""));
  };

  return (
    <Shop
      name="CCC"
      SVGShopElement={
        <g>
          <path id="CCCUp" d="M547,272l-73,0l20,40l73,0l-20,-40Z" />
          <rect x="494" y="312" width="73" height="10" />
          <path id="CCCSide" d="M474,272l0,10l20,40l0,-10l-20,-40Z" />
        </g>
      }
      SVGShopInfo={
        <g id="CCCInfo">
          <path
            id="CCCBorder"
            d="M603,131l-165,0l0,119l69.181,0l13.632,14l12.425,-14l69.762,0l0,-119Z"
            style={{ fill: "#fff", stroke: "#fd8900", strokeWidth: "0.5px" }}
          />
          <g id="CCCText" transform="matrix(1,0,0,1,-299,-53)">
            <text
              x="762.293px"
              y="221.355px"
              style={{
                fontFamily: "'JosefinSans-Regular', 'Josefin Sans'",
                fontSize: "12px",
              }}
            >
              CCC
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
              10:00 - 18:00
            </text>
          </g>
          <text
            onClick={closeShopInfo}
            id="X9"
            x="578.293px"
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

export default CCC;
