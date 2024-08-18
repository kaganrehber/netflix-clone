/* eslint-disable @next/next/no-img-element */
"use client";
import { useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showSignInCode, setShowSignInCode] = useState(false);
  const [buttonText, setButtonText] = useState("Use a Sign-In Code");
  const router = useRouter();

  const handleShowLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  const handleShowSignInCode = () => {
    if (!showSignInCode) {
      setButtonText("Use Password");
    } else {
      setButtonText("Use a Sign-In Code");
    }

    setShowSignInCode(!showSignInCode);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    } else {
      // Handle successful login (e.g., redirect to dashboard)
      console.log("Login successful", data);
      router.push("/");
    }
  };

  return (
    <>
      <div className="sign-in-page">
        <img
          src="/background.jpg"
          alt="background"
          className="background-image"
        />
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
        </div>
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <div className="form">
            {!showSignInCode && (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className={email ? "focused" : ""}>
                    Email or mobile number
                  </label>
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="email" className={password ? "focused" : ""}>
                    Password
                  </label>
                </div>
                <input
                  type="submit"
                  name="sign-in"
                  id="sign-in"
                  value="Sign In"
                />
              </form>
            )}
            {showSignInCode && (
              <form>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email" className={email ? "focused" : ""}>
                    Email or mobile number
                  </label>
                </div>
                <p>Message and data rates may apply</p>
                <input
                  type="submit"
                  name="sign-in"
                  id="sign-in"
                  value="Send Sign-In Code"
                />
              </form>
            )}
            <p>OR</p>
            <div className="sign-in-code">
              <button id="sign-in-code" onClick={handleShowSignInCode}>
                {buttonText}
              </button>
            </div>
            <div className="forgot-password">
              <Link href="/forgot-password" id="forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                value="Remember me"
              ></input>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="sign-up">
              <p>New to Netflix?</p>
              <Link href="/" id="sign-up-now">
                Sign up now.
              </Link>
            </div>
          </div>
          <div className="information">
            <p>
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.{" "}
              <button id="learn-more" onClick={handleShowLearnMore}>
                Learn more.
              </button>
            </p>
            {showLearnMore && (
              <p>
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <Link
                  id="privacy"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  id="tos"
                  href="https://policies.google.com/terms"
                  target="_blank"
                >
                  Terms of Service
                </Link>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
