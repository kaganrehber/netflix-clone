"use client";
import "./styles/dashboard.css";
import { use } from "react";
import { UserContext } from "@/contexts/User";
import HeaderDashboard from "./header-dashboard";

export default function Dashboard() {
  // contexts
  const { user, setUser } = use(UserContext);
  return (
    <div className="page">
      <HeaderDashboard />
    </div>
  );
}
