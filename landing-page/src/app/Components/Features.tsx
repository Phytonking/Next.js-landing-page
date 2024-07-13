import React from "react";
import FeatureCard from "./ui/FeatureCard";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";

const features = [
  {
    title: "User Created Funds",
    description:
      "Invest into other people's investment strategies or start your own fund and earn some money while doing it. Choose from thousands of Stocks, ETFs, Crypto and Private Equity Deals",
    iconUrl: "stack-line.svg", 
  },
  {
    title: "Headstart IPOs",
    description:
      "Got a business? Looking to raise more capital? Use Headstart IPOs and manage your own Cap Table while getting investors on FinWheel to invest in your idea with as little as $5.",
    iconUrl: "terminal-box-line.svg", 
  },
  {
    title: "Fin: AI Financial Management",
    description: "Get 24/7 support to help you with any issues or changes that you want to make with your financial plan.",
    iconUrl: "/zap.svg", 
  },
];

const Features: React.FC = () => {
  return (
    <div id="features" className="flex flex-col items-center gap-3 mx-auto max-w-[1280px] py-16 px-4">
      <Badge text="Features" />
      <SectionTitle
        title="Worry-Free Financial Management"
        description="Our products are designed to help you manage your personal or business income with your peace-of-mind."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            iconUrl={feature.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
