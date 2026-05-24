import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Menu from "./components/MenuLateral";

import {
  AUTH_CHANGE_EVENT,
  clearAuthSession,
  getTokenExpiration,
  isAuthenticated,
} from "./services/auth";

function useAuthStatus() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    let timeoutId;

    function syncAuthStatus() {
      const isValid = isAuthenticated();
      const expiresAt = getTokenExpiration();

      setAuthenticated(isValid);
      window.clearTimeout(timeoutId);

      if (isValid && expiresAt) {
        timeoutId = window.setTimeout(() => {
          clearAuthSession();
          setAuthenticated(false);
        }, Math.max(expiresAt - Date.now(), 0));
      }
    }

    syncAuthStatus();
    window.addEventListener(AUTH_CHANGE_EVENT, syncAuthStatus);
    window.addEventListener("storage", syncAuthStatus);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener(AUTH_CHANGE_EVENT, syncAuthStatus);
      window.removeEventListener("storage", syncAuthStatus);
    };
  }, []);

  return authenticated;
}

function ProtectedRoute({ authenticated, children }) {
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function PublicRoute({ authenticated, children }) {
  if (authenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default function App() {
  const authenticated = useAuthStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute authenticated={authenticated}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute authenticated={authenticated}>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to={authenticated ? "/home" : "/"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
