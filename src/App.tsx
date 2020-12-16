import React from "react";
import GalleryWrapper from "./components/GalleryWrapper";

const App: React.FC = () => {
  return (
    <>
      <GalleryWrapper>
        <g
          fill="#fff"
          stroke="#000"
          stroke-width=".5"
        >
          <path d="M547 272h-73l20 40h73l-20-40zm-53 40h73v10h-73z" />
          <path d="M474 272v10l20 40v-10l-20-40z" />
        </g>
      </GalleryWrapper>
    </>
  );
};

export default App;
