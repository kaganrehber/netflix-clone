import "./styles/kids.css";
import Image from "next/image";

export default function Kids() {
  return (
    <>
      <div className="kids-container">
        <div className="image-container">
          <Image
            src="/kids.png"
            alt="netflix kids logo"
            width={600}
            height={0}
          />
        </div>
        <div className="text-container">
          <h2>Create profiles for kids</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </>
  );
}
