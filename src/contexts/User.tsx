"use client";

import { createContext, useEffect, useState } from "react";

interface IUserDto {
  id: number;
  email: string;
  password: string;
  name: string;
  date: Date;
}

type ContextProps = {
  user: Partial<IUserDto>;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUserDto>>>;
};

type PropviderProps = {
  children: React.ReactNode;
  userInfo: IUserDto;
};

const UserContext = createContext<Partial<ContextProps>>({});

const UserProvider = ({ children, userInfo }: PropviderProps) => {
  // state
  const [user, setUser] = useState<Partial<IUserDto>>({});

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
