import React from "react";

const SparklingText = ({ text }) => {
  return (
    <h1 className="text-center p-5 font-[800] text-4xl lg:text-6xl leading-[35px]">
      <span className="magic-text">{text}</span>
    </h1>
  );
};

export default SparklingText;
