import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginFrame from "./pages/LoginFrame";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loginframe":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginFrame />} />

      <Route path="/loginframe" element={<LoginFrame />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/register" element={<Register />} />

      <Route path="/profile" element={<Register />} />
    </Routes>
  );
}
export default App;
