import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your template ID
        form.current,
        "your_public_key" // replace with your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-16">
        {/* Heading */}
        <div>
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            Let’s <span className="text-red-500">Connect</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Have a question, project, or partnership idea? Reach out to us directly or use the form below — our team will respond within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Phone Card */}
          <a
            href="tel:+917779027110"
            className="group bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-red-500 shadow-lg hover:shadow-red-500/20 transition-all duration-300 block"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📞</div>
            <h4 className="text-xl font-semibold text-red-400 mb-2">Phone</h4>
            <p className="text-gray-300 group-hover:text-white transition-colors">
              +91 77790 27110
            </p>
            <p className="text-sm text-gray-500 mt-1">Available Mon–Sat, 9 AM – 6 PM</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:admin@nexgenbrothersconstruction.com"
            className="group bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-red-500 shadow-lg hover:shadow-red-500/20 transition-all duration-300 block"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
            <h4 className="text-xl font-semibold text-red-400 mb-2">Email</h4>
            <p className="text-gray-300 group-hover:text-white transition-colors">
              admin@nexgenbrothersconstruction.com
            </p>
            <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
          </a>

          {/* Location Card */}
          <a
            href="https://maps.app.goo.gl/j3HfzA2z1mcgxMHQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-red-500 shadow-lg hover:shadow-red-500/20 transition-all duration-300 block"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📍</div>
            <h4 className="text-xl font-semibold text-red-400 mb-2">Office</h4>
            <p className="text-gray-300 group-hover:text-white transition-colors">
              Vadodra, Gujrat , India
            </p>
            <p className="text-sm text-gray-500 mt-1">View on Google Maps</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-red-400">
            Send us a message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4 text-left">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                isSending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`mt-3 text-sm ${
                  status.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
