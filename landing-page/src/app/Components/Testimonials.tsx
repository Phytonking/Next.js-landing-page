import React from "react";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    image: "Oval.svg",
    quote: "FinWheel has helped me manage my finances with ease, and I'm on track to a perfect retirement in 25 years. Fin is such a friendly and on-point bot that really makes it super easy for me to manage my finances on the spot. Even if an emergency happens, Fin is there to help!",
    name: "Isabella Chavez",
    title: "Individual User of FinWheel",
  },
  {
    image: "Oval2.svg",
    quote: "I was struggling to find a way to make money creating my own fund that my users can invest in that truly represented my brand. FinWheel came to the rescue with its User-Created Funds platform and allowed my community to have the investment fund they wanted.",
    name: "John Doe",
    title: "Founder, Infinite Options",
  },
  {
    image: "Oval3.svg",
    quote: "I've used many companies in the past to help me raise capital for my business, but FinWheel makes it super accessible for users like me to get my capital from people who truly belive in the startup that I am bulding.",
    name: "Jane Smith",
    title: "CMO, GlobalTech Innovations",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full px-4 py-16 bg-white">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <meta name="keywords" content="finwheel, customers, testimonials, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
,robo financial advisors, robo advisor investment, invest with a robo advisor, robo advisor stock, robo investing platform, robo advisor platform, automated financial advisor, best robo financial advisors, automated financial advice, best robo financial advisor, robo advisor company, robo advisor portfolio, hybrid robo advisors, best robo advisor 2022, investing with robo advisor, robo investment account, best robo advisor accounts, best robo advisor ira, robo investing companies, investing with robo advisors, robo advisor personal capital, robo advisor for investing, wealth management robo advisor, invest in robo advisor, robo advisor trading
" />
        <Badge text="Testimonials" />
        <SectionTitle
          title="What Users Are Saying"
          description="Discover how FinWheel's tools has transformed the way people invest."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;