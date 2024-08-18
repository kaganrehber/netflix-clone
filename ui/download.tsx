import Image from "next/image";
import "./styles/download.css";

export default function Download() {
  return (
    <>
      <div className="download">
        <div className="image-container">
          <div className="phone-image">
            <Image
              src="/mobile-0819.jpg"
              alt="phone showing eleven from s3"
              width={600}
              height={0}
            />
          </div>
          <div className="download-notif">
            <Image
              src="/boxshot.png"
              alt="stranger thins season 2 poster"
              width={70}
              height={0}
            />
            <div className="text">
              <h3>Stranger Things</h3>
              <span>Downloading...</span>
            </div>
          </div>
        </div>
        <div className="text-container">
          <h2>Download your shows to watch offline</h2>
          <span>
            Save your favorites easily and always have something to watch.
          </span>
        </div>
      </div>
    </>
  );
}
