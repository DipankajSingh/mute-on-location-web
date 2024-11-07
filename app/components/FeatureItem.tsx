// FeatureItem.tsx
import React from "react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex text-center flex-col items-center  p-4">
      <div className="text-4xl">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
