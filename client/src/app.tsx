import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { Switch, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { WelcomePage } from "./pages/WelcomePage";

const App = () => {
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogin = Boolean(token);

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, isReady }}>
      <Switch>
        {isLogin ? (
          <Route exact path="/">
            <WelcomePage />
          </Route>
        ) : (
          <>
            <Route exact path="/">
              <WelcomePage />
            </Route>
            <Route path="/auth/login">
              <AuthPage />
            </Route>
            <Route path="/auth/signup">
              <AuthPage />
            </Route>
          </>
        )}
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;
