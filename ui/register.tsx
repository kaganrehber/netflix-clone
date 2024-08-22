"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import "./styles/register.css";

export default function Register() {
  const searchParams = useSearchParams();
  const emailQuery = searchParams?.get("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    } else {
      // Handle successful registration (e.g., redirect to login)
      console.log("Registration successful", data);
      router.push("/login");
    }
  };

  useEffect(() => {
    if (emailQuery) {
      setEmail(emailQuery);
    }
  }, [emailQuery]);

  return (
    <div className="page">
      <Header />
      <div className="register-container">
        <h1>Create a password to start your membership</h1>
        <p>Just a few more steps and you&apos;re done!</p>
        <p>We hate paperwork, too.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={email ? "focused" : ""}>
              Email Address
            </label>
          </div>
          <div className="input-field">
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className={name ? "focused" : ""}>
              Name
            </label>
          </div>
          <div className="input-field">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className={password ? "focused" : ""}>
              Password
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}
