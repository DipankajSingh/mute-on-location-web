// Footer.tsx
import React from "react";
// Import or create custom social icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="text-center md:text-left space-y-8">
            <h2 className="flex relative">
              <span className="h-16 w-16 top-[-.85rem] left-[-.5rem] rounded-full bg-colorSecondary absolute"></span>
              <span className="z-10 text-2xl max-sm:text-xl font-bold text-colorSecondary font-serif">
                <span className="text-white">mute</span> on location
              </span>
            </h2>
            <p className="text-gray-400">
              Made with love by{" "}
              <a href="https://dipdev.tech">Dipankaj (Dipdev)</a>
            </p>
          </div>

          <div className="flex space-x-8">
            <div>
              <h3 className="font-semibold text-gray-300">App Features</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#location" className="hover:underline">
                    Location-Based Muting
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact-Based Unmuting
                  </a>
                </li>
                <li>
                  <a href="#saved-locations" className="hover:underline">
                    Saved Locations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-use" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:underline">
                    github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://dipdev.tech">Dipdev</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
