import { createContext, useEffect, useState } from "react";

export const AuthorizationContext = createContext(null);
function Authorization({ children }) {
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, []);
  const [isAuth, setIsAuth] = useState();
  return (
    <AuthorizationContext.Provider value={{ isAuth }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
export default Authorization;

// Parent component (Re Render)
// Child Component (Re Render)
