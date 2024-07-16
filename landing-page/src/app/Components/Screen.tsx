import VideoScreen from "./ui/VideoScreen";
import SectionTitle from "./ui/SectionTitle";

const Screen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-12 text-center">
      <meta name="keywords" content="podcast, video, finwheel, investing, Startup Central, certified financial planner, chartered financial planner, financial advisor, certified financial advisor, chartered financial advisor, lplfinancial, lpl fin, wells fargo advisors llc, financial advisors near me, financial planner, personal financial advisor near me, financial planner near me, certified financial manager, investment advisor, morgan stanley financial advisors, retirement financial planner, financial advisor income, salaried financial advisor, financial planning retirement planner, personal financial specialist, fiduciary financial advisor, financial consultant, fiduciary investment advisor, financial advisor for athletes, best financial advisors
"/>
      <SectionTitle
          title="Check Out our latest Podcast Interview"
          description="Our founder was interviewed by: A.C. Rockett"
        />
      <VideoScreen
        thumbnailSrc="/Dashboard.jpg"
        videoSrc="https://www.youtube.com/embed/QNTwQ4-SnS8?si=mYYN28h7JagRd21k"
        alt="Dashboard preview"
      />
    </div>
  );
};

export default Screen;