"use client";
import HeaderDashboard from "./header-dashboard";
import { use, useState } from "react";
import { UserContext } from "@/contexts/User";
import "./styles/profile.css";

export default function Profile() {
  const { user, setUser } = use(UserContext);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="page">
      <HeaderDashboard />
      {!showEdit ? (
        <div className="profile">
          <h1>Welcome back, {user?.name}!</h1>
          <h1>User Information:</h1>
          <h3>Name:</h3>
          <p>{user?.name}</p>
          <h3>Email:</h3>
          <p>{user?.email}</p>
          <button onClick={handleClick}>Edit Profile</button>
        </div>
      ) : (
        <div className="edit-profile">
          <form>
            <div className="input-field">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
}
