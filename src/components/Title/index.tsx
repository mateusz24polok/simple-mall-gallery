import React from "react";
import { StyledTitle } from "./styled";

interface TitleProps {
  titleText: string;
}

const Title: React.FC<TitleProps> = ({ titleText }) => {
  return <StyledTitle>{titleText}</StyledTitle>;
};

export default Title;
