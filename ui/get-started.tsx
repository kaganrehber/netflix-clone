/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./styles/get-started.css";

export default function GetStarted() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      router.push(`/register?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <>
      <div className="get-started">
        <img
          src="/background.jpg"
          alt="background"
          className="background-image"
        />
        <Header />
        <div className="register">
          <div className="title">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch Anywhere. Cancel Anytime.</p>
          </div>
          <div className="get-started-form">
            <form onSubmit={handleSubmit}>
              <div className="email-description-text">
                <label htmlFor="">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </label>
              </div>
              <div className="get-started-input">
                <input
                  id="get-started-email"
                  name="get-started-email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="get-started-submit">
                  <input
                    id="get-started-submit"
                    name="get-started-submit"
                    type="submit"
                    value="Get Started"
                  />
                  <Image
                    src="/right.png"
                    alt="right arrowhead"
                    width={20}
                    height={0}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
