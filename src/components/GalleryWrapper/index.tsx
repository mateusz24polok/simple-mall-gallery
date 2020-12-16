import React from "react";

interface GalleryWrapperProps {
  children: React.ReactElement;
}

const GalleryWrapper: React.FC<GalleryWrapperProps> = ({ children }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 950 380"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
    >
      {children}
    </svg>
  );
};

export default GalleryWrapper;
