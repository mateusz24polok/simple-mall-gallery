import React from "react";
import Title from "./components/Title";
import GalleryWrapper from "./components/GalleryWrapper";
import Road from "./components/GallerySegments/Road";
import Stairs from "./components/GallerySegments/Stairs";
import Parkings from "./components/GallerySegments/Parkings";
import CCC from "./components/Shops/CCC";
import PepCo from "./components/Shops/PepCo";
import NeoNet from "./components/Shops/NeoNet";
import MartesSport from "./components/Shops/MartesSport";
import TXM from "./components/Shops/TXM";

const App: React.FC = () => {
  return (
    <>
      <Title titleText="🛒 Simple Mall Gallery 🛒" />
      <GalleryWrapper>
        <Road />
        <Stairs />
        <Parkings />
        <CCC />
        <PepCo />
        <NeoNet />
        <MartesSport />
        <TXM />
      </GalleryWrapper>
    </>
  );
};

export default App;
