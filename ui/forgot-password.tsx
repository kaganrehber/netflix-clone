/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "./Header";
import Link from "next/link";
import { useState } from "react";
import "./styles/forgot-password.css";

export default function ForgotPassword() {
  const [toggleEmailSMS, setToggleEmailSms] = useState(true);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.value === "sms") {
      setToggleEmailSms(false);
    } else {
      setToggleEmailSms(true);
    }
  };

  const handleShowLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  return (
    <>
      <div className="page">
        <Header />
        <img
          src="/login-the-crown_2-1500x1000.jpg"
          alt="the crown"
          className="background-image"
        />
        <div className="forgot-password-container">
          <h1>Update password, email or phone</h1>
          <p>How would you like to reset your password?</p>
          <div className="selection">
            <div className="radio-label">
              <input
                type="radio"
                value="email"
                id="email-checkbox"
                name="email-checkbox"
                checked={toggleEmailSMS}
                onChange={handleRadioChange}
              />
              <label htmlFor="email-checkbox">Email</label>
            </div>
            <div className="radio-label">
              <input
                type="radio"
                value="sms"
                id="sms"
                name="sms"
                checked={!toggleEmailSMS}
                onChange={handleRadioChange}
              />
              <label htmlFor="sms">Text Message (SMS)</label>
            </div>
          </div>
          {toggleEmailSMS ? (
            <div className="form">
              <p>
                We will send you an email with instructions on how to reset your
                password.
              </p>
              <form>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <button type="submit" id="email-me" name="email-me">
                  Email Me
                </button>
              </form>
            </div>
          ) : (
            <div className="form">
              <p>
                We will text you a verification code to reset your password.
                Message and data rates may apply.
              </p>
              <form>
                <input type="phone" id="phone" name="phone" />
                <button type="submit" id="text-me" name="text-me">
                  Text Me
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="information">
          <p className="text">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.{" "}
            <button id="learn-more" onClick={handleShowLearnMore}>
              Learn more.
            </button>
          </p>
          {showLearnMore && (
            <p className="text">
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <Link
                id="privacy"
                href="https://policies.google.com/privacy"
                target="_blank"
                className="link"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                id="tos"
                href="https://policies.google.com/terms"
                target="_blank"
                className="link"
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
    </>
  );
}
