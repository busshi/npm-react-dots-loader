import React from "react";
import "./dotsLoader.css";

interface DotsLoaderProps {
  width?: string;
  height?: string;
  color?: string;
}

interface DotsLoaderStyle extends React.CSSProperties {
  "--dots-width"?: string;
  "--dots-height"?: string;
  "--dots-color"?: string;
}

const DotsLoader: React.FC<DotsLoaderProps> = ({
  width = "20px",
  height = "20px",
  color = "#ddd",
}) => {
  const dotsLoaderStyle: DotsLoaderStyle = {
    "--dots-width": width,
    "--dots-height": height,
    "--dots-color": color,
  };

  return (
    <span className="loader">
      <span className="loader-ball" style={dotsLoaderStyle} />
      <span className="loader-ball" style={dotsLoaderStyle} />
      <span className="loader-ball" style={dotsLoaderStyle} />
    </span>
  );
};

export default DotsLoader;
