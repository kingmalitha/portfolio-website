import React from "react";

const SkillSection = ({ title, heading, desciption, images }) => {
  console.log(title);
  return (
    <div className="bg-[#222] rounded-md p-4">
      <h2 className="text-lg font-[500] text-center mb-4">{title}</h2>

      <div className="bg-[#555] rounded-lg p-2 text-center mb-3">
        <h3 className="text-sm">{heading}</h3>
      </div>

      <p className="text-sm px-6 lg:px-0">{desciption}</p>
    </div>
  );
};

export default SkillSection;
