// FeatureSection.tsx
import React from "react";
import FeatureItem from "./FeatureItem";
import { FaMapLocation } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { MdSaveAs } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
const features = [
  {
    title: "Location-Based Muting",
    description:
      "Automatically mute notifications based on your current location.",
    icon: <FaMapLocation size={130} className="text-colorSecondary" />,
    id: "location",
  },
  {
    title: (
      <span>
        Contact-Based Unmuting
        <span className="absolute text-xs rounded mr-1 px-1 bg-gray-400">
          coming soon!
        </span>
      </span>
    ),
    description:
      "Unmute notifications for important contacts during incoming calls.",
    icon: <IoMdContacts size={130} className="text-colorSecondary" />,
    id: "contact",
  },
  {
    title: "Saved Locations",
    description:
      "Manage and view saved locations for muting and unmuting preferences.",
    icon: <MdSaveAs size={130} className="text-colorSecondary" />,
    id: "saved-locations",
  },
  {
    title: "User-Friendly Interface",
    description: "A clean, intuitive design for easy navigation and control.",
    icon: <GiSmartphone size={130} className="text-colorSecondary" />,
    id: "",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          App Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
