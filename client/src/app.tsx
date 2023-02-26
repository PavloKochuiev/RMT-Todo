import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { WelcomePage } from "./pages/WelcomePage";
import { TodoPage } from "./pages/TodoPage";

function App() {
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogin = !!token;

  const useRoutes = (isLogin: boolean) => {
    if (isLogin) {
      return (
        <Routes>
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      );
    }

    return (
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/auth/signup" element={<AuthPage />} />
      </Routes>
    );
  };

  const routes = useRoutes(isLogin);

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady }}>
      {routes}
    </AuthContext.Provider>
  );
}

export default App;
