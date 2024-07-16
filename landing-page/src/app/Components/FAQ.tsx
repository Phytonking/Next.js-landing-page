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
      <meta name="keywords" content="finwheel, email, sign-up, invest, automated investing, automated data processing stock, auto investing, automatic investment, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
,robo financial advisors, robo advisor investment, invest with a robo advisor, robo advisor stock, robo investing platform, robo advisor platform, automated financial advisor, best robo financial advisors, automated financial advice, best robo financial advisor, robo advisor company, robo advisor portfolio, hybrid robo advisors, best robo advisor 2022, investing with robo advisor, robo investment account, best robo advisor accounts, best robo advisor ira, robo investing companies, investing with robo advisors, robo advisor personal capital, robo advisor for investing, wealth management robo advisor, invest in robo advisor, robo advisor trading
" />
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
