import "./styles/watch-everywhere.css";
import Image from "next/image";

export default function WatchEverywhere() {
  return (
    <>
      <div className="watch-everywhere">
        <div className="text">
          <h2>Watch Everywhere</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="devices">
          <div className="images">
            <Image
              src="/device-pile.png"
              alt="various devices showinf netflix shows"
              width={500}
              height={0}
            />
          </div>
          <div className="video-player">
            <video
              autoPlay
              loop
              muted
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            />
          </div>
        </div>
      </div>
    </>
  );
}
