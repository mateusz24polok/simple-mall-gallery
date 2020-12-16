import React from "react";
import GalleryWrapper from "./components/GalleryWrapper";
import Road from "./components/GallerySegments/Road";
import Stairs from "./components/GallerySegments/Stairs";
import Parkings from "./components/GallerySegments/Parkings";

const App: React.FC = () => {
  return (
    <>
      <GalleryWrapper>
        <Road />
        <Stairs />
        <Parkings />
      </GalleryWrapper>
    </>
  );
};

export default App;
