import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { appRoutes } from "./config/routes";
import NotificationsSystem, {
  setUpNotifications,
  useNotifications,
  atalhoTheme,
} from "reapop";
import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: "top-right",
        dismissible: true,
        dismissAfter: 4000,
      },
    });
  }, []);
  const { notifications, dismissNotification } = useNotifications();
  const token = useSelector((state: any) => state.auth.token);
  return (
    <div>
      <Navbar />
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dismissNotification(id)}
        theme={atalhoTheme}
      />
      <Routes>
        {appRoutes.map(({ id, path, component, isProtected }) =>
          isProtected ? (
            <Route
              key={id}
              path={path}
              element={token ? component : <Navigate to="/login" replace />}
            />
          ) : (
            <Route key={id} path={path} element={component} />
          )
        )}
      </Routes>
    </div>
  );
};

export default App;
