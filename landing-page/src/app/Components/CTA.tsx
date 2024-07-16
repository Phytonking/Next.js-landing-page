"use client";
import React from 'react';
import Button from './ui/Button';

const CTA = () => {
  const handleClick = () => {
    console.log("CTA Button Clicked!");
  };

  return (
    <div className="container mx-auto max-w-[1280px] bg-blue-50 py-10 mt-12 flex flex-col items-center px-8 sm:px-20 md:px-56">
      <div className="flex w-full flex-col gap-6 md:flex-row justify-between items-center md:ml-10">
        <meta name="keywords" content="finwheel, email, sign-up, invest, automated investing, automated data processing stock, auto investing, automatic investment, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
,robo financial advisors, robo advisor investment, invest with a robo advisor, robo advisor stock, robo investing platform, robo advisor platform, automated financial advisor, best robo financial advisors, automated financial advice, best robo financial advisor, robo advisor company, robo advisor portfolio, hybrid robo advisors, best robo advisor 2022, investing with robo advisor, robo investment account, best robo advisor accounts, best robo advisor ira, robo investing companies, investing with robo advisors, robo advisor personal capital, robo advisor for investing, wealth management robo advisor, invest in robo advisor, robo advisor trading
" />
        <h2 className="text-blue-600 text-2xl md:text-3xl font-bold leading-10">
          Sign up for the Beta Testing!
        </h2>
        <a href="https://forms.gle/AjQyY4srfNivnQPHA" target="_blank">
          <Button
            text="Sign up!"
            variant="cta"
            size="medium"
            className="rounded-lg font-bold"
            onClick={handleClick}
          />
        </a>
      </div>
    </div>
  );
};

export default CTA;
