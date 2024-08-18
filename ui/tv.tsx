import Image from "next/image";
import "./styles/tv.css";
export default function TV() {
  return (
    <div className="tv">
      <div className="text">
        <h1>Enjoy on your TV</h1>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="tv-player">
        <Image
          src="/tv.png"
          alt="tv frame"
          width={500}
          height={500}
          id="tv-frame"
        />
        <div className="vid-player">
          <video
            autoPlay
            loop
            muted
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          />
        </div>
      </div>
    </div>
  );
}
