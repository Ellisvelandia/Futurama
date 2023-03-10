import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";

const VideoCard = ({ episodes }) => {
  return (
    <div
      className="w-full mx-auto textShadows"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={8}
        infiniteLoop={true}
        showStatus={false}
        className="w-full"
      >
        {episodes.map((episode) => (
          <div key={episode._id} className="h-fit">
            <div className="object-cover w-full without">
              <img
                src={episode.image}
                alt={episode.title}
                className="m-auto lg:aspect-video w-full h-full blur-0"
                loading="lazy"
              />
            </div>
            <div className="absolute lg:p-20 py-16 px-4 bottom-0 flex flex-col w-full posterImage">
              <div className="font-black lg:text-5xl text-3xl my-2 lg:text-left w-full text-center flex flex-col">
                Episode-{episode.title}
                <span>{episode.number}</span>
              </div>
              <div className="md:text-3xl text-base my-2 md:text-left text-justify textShadows md:mx-0 mx-4">
                {episode.desc}
              </div>
              <div className="md:w-1/2 w-full flex justify-center md:text-left md:justify-start text-justify  text-md mb-1 md:text-lg font-semibold">
                Writers: {episode.writers}
              </div>
              <div className="md:w-1/2 w-full md:text-left text-justify text-md flex md:justify-start justify-center mb-1 md:text-lg font-semibold">
                OriginalAirDate: {episode.originalAirDate}
              </div>
              <div className="flex gap-4 mt-2 justify-center w-full">
                <Link to={`/episodevideo/${episode._id}`} key={episode._id}>
                  <button
                    className="md:text-lg text-base p-3 rounded-md flex justify-center bg-[#459ED3] hover:bg-cyan-600 active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Play
                    <FiPlay className="w-5 mt-1.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCard;
