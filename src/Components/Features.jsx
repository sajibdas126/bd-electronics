import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

export const Features = () => {
  const features = [
    { icon: Truck, text: "Free Shipping", subText: "on orders over $100" },
    { icon: Lock, text: "Secure Payment", subText: "100% protected payments" },
    { icon: RotateCcw, text: "Easy Returns", subText: "30-day return policy" },
    {
      icon: Clock,
      text: "24/7 Support",
      subText: "Dedicated customer service",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center text-center sm:text-left"
              >
                <Icon
                  className="flex-shrink-0 h-10 w-10 text-gray-600"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {feature.text}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.subText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
