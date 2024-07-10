"use client";

import React, { useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import PricingCard from "./ui/PricingCard";
import ToggleSwitch from "./ui/ToggleSwitch";
import Badge from "./ui/Badge";

const pricingPlans = {
  monthly: [
    {
      planName: "Free",
      price: "$0",
      duration: "month",
      features: [
        { text: "100 messages with Fin per day", available: true },
        { text: "5 free financial analyses per month", available: true },
        { text: "Exclusive Bonuses", available: false },
        { text: "No access to User-Created-Funds", available: false },
        { text: "No access to Headstart IPO investing and management", available: false },
      ],
      buttonText: "Get started for free",
    },
    {
      planName: "Pro",
      price: "$10",
      duration: "month",
      features: [
        { text: "Unlimited messages with Fin per day", available: true },
        { text: "Unlimited financial analyses and reports", available: true },
        { text: "All exclusive bonuses for spending", available: true },
        { text: "Access to be a user created funds owner", available: true },
        { text: "Access to Headstart IPO investing and management", available: true},
      ],
      buttonText: "Get started with a 30 day free trial",
    }
  ],
  yearly: [
    {
      planName: "Free",
      price: "$0",
      duration: "year",
      features: [
        { text: "100 messages with Fin per day", available: true },
        { text: "5 free financial analyses per month", available: true },
        { text: "Exclusive Bonuses", available: false },
        { text: "No access to User-Created-Funds", available: false },
        { text: "No access to Headstart IPO investing and management", available: false },
      ],
      buttonText: "Get started for free",
    },
    {
      planName: "Pro",
      price: "$60",
      duration: "year",
      features: [
        { text: "Unlimited messages with Fin per day", available: true },
        { text: "Unlimited financial analyses and reports", available: true },
        { text: "All exclusive bonuses for spending", available: true },
        { text: "Access to be a user created funds owner", available: true },
        { text: "Access to Headstart IPO investing and management", available: true},
      ],
      buttonText: "Get started with a 30 day free trial",
    }
    
  ],
};

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section id="pricing" className="bg-blue-50 md:mt-24 mt-8">
      <div className="container max-w-[1280px] py-16 px-4 mx-auto flex flex-col items-center gap-3">
        <Badge text="Pricing" bgColor="bg-white" />
        <SectionTitle
          title="Pricing and Plans"
          description="Unlock the potential of our LaunchPage landing page template with versatile pricing plans tailored to your needs."
        />
        <div className="mb-10 -mt-4">
          <ToggleSwitch onToggle={handleToggle} isMonthly={isMonthly} />
        </div>

        <div  className="flex justify-center gap-8 flex-wrap">
          {pricingPlans[isMonthly ? "monthly" : "yearly"].map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;