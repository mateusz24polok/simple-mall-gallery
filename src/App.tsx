import React, { useState } from "react";
import { AppContext } from "./AppContext";
import GalleryWrapper from "./components/GalleryWrapper";
import Road from "./components/GallerySegments/Road";
import Stairs from "./components/GallerySegments/Stairs";
import Parkings from "./components/GallerySegments/Parkings";
import CCC from "./components/Shops/CCC";
import PepCo from "./components/Shops/PepCo";

const App: React.FC = () => {
  const [activeShop, setActiveShop] = useState("");

  const handleShopClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    setActiveShop(event.currentTarget.id);
  };

  return (
    <>
      <GalleryWrapper>
        <AppContext.Provider value={{ handleShopClick, activeShop }}>
          <Road />
          <Stairs />
          <Parkings />
          <CCC />
          <PepCo />
        </AppContext.Provider>
      </GalleryWrapper>
    </>
  );
};

export default App;
