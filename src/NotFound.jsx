import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-24 pb-12 text-center">
      <h2 className="text-3xl font-bold">Page not found</h2>
      <p className="mt-4">Go back to <Link to="/" className="text-indigo-600">Home</Link>.</p>
    </div>
  );
}
