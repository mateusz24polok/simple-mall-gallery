import { createContext } from "react";

const handleShopClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    console.log(event.currentTarget.id);
};

export const AppContext = createContext({handleShopClick, activeShop: ""});
