import React from "react";

export default function TermsPolicy() {
  return (
    <section className="bg-gray-50 text-gray-800 py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Terms & Policies
        </h1>
        <p className="text-gray-600 leading-relaxed">
          This is a dummy terms and policies section. You can replace this with your
          actual content in the future. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla ac enim nec purus imperdiet tincidunt.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Refund & Cancellation Policy</li>
          <li>Data Protection Policy</li>
        </ul>
      </div>
    </section>
  );
}
