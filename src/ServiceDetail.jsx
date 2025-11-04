import React from "react";
import { useParams } from "react-router-dom";
import Civil from "./Civil";
import Fabrication from "./Fabrication";
import FireSafety from "./FireSafety";
import Maintenance from "./Maintenance";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  switch (serviceId) {
    case "civil":
      return <Civil />;
    case "fabrication":
      return <Fabrication />;
    case "fire":
      return <FireSafety />;
    case "maintenance":
      return <Maintenance />;
    default:
      return (
        <div className="pt-24 pb-12 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
          <p className="mt-4 text-gray-500">Please go back and select a valid service.</p>
        </div>
      );
  }
}
