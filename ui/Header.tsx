import Image from "next/image";
import Link from "next/link";
import "./styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">
          <Image
            src="/Netflix_Logo_RGB.png"
            alt="netflix logo"
            width={200}
            height={50}
          />
        </Link>
      </div>
      <Link href="/login">
        <div className="sign-in">
          Sign In
          <Image src="/right.png" alt="right arrowhead" width={20} height={5} />
        </div>
      </Link>
    </div>
  );
}
