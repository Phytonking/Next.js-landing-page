import React from "react";
import FAQItem from "./ui/FAQItem";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";

const faqData = [
  {
    question: "Are there any extra fees to keep in mind?",
    answer:
      "Yes, there may be commission fees charged by our automated investing system. The fee schedule is here.",
  },
  {
    question: "Do I need to be 18 to get started?",
    answer:
      "Not at all! You are eligible to sign up for FinWheel's products if you are at least 13 years old. However, if you are 13 - 17 years old, you will need a parent to sign up to supervise your account. ",
  },
  {
    question: "What's the minimum deposit for FinWheel's User Created Funds?",
    answer:
      "You can invest in new User Created Funds for as little as $5.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <div id="faq" className="max-w-[800px] mx-auto p-4 py-16 items-center">
      <div className="flex flex-col items-center gap-3">
        <Badge text="FAQs" />
        <SectionTitle
          title="Frequently Asked Questions"
          description="Get quick answers to common questions about FinWheel's products."
        />
      </div>
      <div className="mt-4 px-2">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />)
        )}
      </div>
    </div>
  );
};

export default FAQSection;
