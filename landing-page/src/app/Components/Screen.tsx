import VideoScreen from "./ui/VideoScreen";
import SectionTitle from "./ui/SectionTitle";

const Screen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-12 text-center">
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