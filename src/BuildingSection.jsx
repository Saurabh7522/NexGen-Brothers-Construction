import React from "react";
import buildingImg from "./assets/images/building.webp";

const BuildingSection = () => {
  return (
    <div className="p-4">
      <ul className="space-y-2">
        <li className="flex items-center gap-3"><img src={buildingImg} alt="" className="w-12 h-8 object-cover rounded" /> Building Section 1</li>
        <li>Building Section 2</li>
        <li>Building Section 3</li>
      </ul>
    </div>
  );
};

export default BuildingSection;
