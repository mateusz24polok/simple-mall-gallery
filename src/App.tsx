import React from "react";
import GalleryWrapper from "./components/GalleryWrapper";
import Road from "./components/GallerySegments/Road";
import Stairs from "./components/GallerySegments/Stairs";
import Parkings from "./components/GallerySegments/Parkings";
import CCC from "./components/Shops/CCC";
import PepCo from "./components/Shops/PepCo";

const App: React.FC = () => {
  return (
    <>
      <GalleryWrapper>
        <Road />
        <Stairs />
        <Parkings />
        <CCC />
        <PepCo />
      </GalleryWrapper>
    </>
  );
};

export default App;
