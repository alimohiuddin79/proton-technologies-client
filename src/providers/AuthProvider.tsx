import { createContext, useState } from "react";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedUserInfo = localStorage.getItem("authenticatedUser");
  const userInfo: User | null = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  const [user, setUser] = useState<User | null>(userInfo);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
