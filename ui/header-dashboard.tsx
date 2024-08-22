"use client";
import { use, useEffect, useState } from "react";
import { UserContext } from "@/contexts/User";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "./styles/header-dashboard.css";

export default function HeaderDashboard() {
  const { user, setUser } = use(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        setUser && setUser(null);
        router.push("/login");
      } else {
        console.error("Logout Failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return (
    <div className="header">
      <div className="logo-navbar">
        <div className="logo">
          <Link href="/dashboard">
            <Image
              src="/Netflix_Logo_RGB.png"
              alt="netflix logo"
              width={200}
              height={50}
            />
          </Link>
        </div>
        <div className="navbar">
          <Link href="/dashboard" className="link">
            <p>Home</p>
          </Link>
          <Link href="/dashboard" className="link">
            <p>TV Shows</p>
          </Link>
          <Link href="/dashboard" className="link">
            <p>Movies</p>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <div className="button">
          <button onClick={toggleDropdown}>Menu</button>
        </div>
        <div className={`dropdown-select ${showDropdown ? "expanded" : ""}`}>
          <ul>
            <Link href="/profile" id="profile-button">
              <li>Profile</li>
            </Link>
            <li onClick={handleLogout}>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
