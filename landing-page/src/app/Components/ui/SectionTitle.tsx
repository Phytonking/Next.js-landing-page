import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 mb-8">
      <meta name="keywords" content="finwheel, email, sign-up, invest, automated investing, automated data processing stock, auto investing, automatic investment, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
,robo financial advisors, robo advisor investment, invest with a robo advisor, robo advisor stock, robo investing platform, robo advisor platform, automated financial advisor, best robo financial advisors, automated financial advice, best robo financial advisor, robo advisor company, robo advisor portfolio, hybrid robo advisors, best robo advisor 2022, investing with robo advisor, robo investment account, best robo advisor accounts, best robo advisor ira, robo investing companies, investing with robo advisors, robo advisor personal capital, robo advisor for investing, wealth management robo advisor, invest in robo advisor, robo advisor trading
" />
      <h2 className="text-center text-slate-800 text-2xl md:text-4xl  font-bold leading-10">
        {title}
      </h2>
      <p className="text-center text-gray-900 text-base font-medium opacity-70 max-w-[500px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
