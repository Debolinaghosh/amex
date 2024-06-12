import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CaseStudyPage from "./pages/CaseStudyPage";
import Course from "./pages/Course";
import Module from "./pages/Module";
import Case from "./pages/Case";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/course":
        title = "";
        metaDescription = "";
        break;
      case "/module":
        title = "";
        metaDescription = "";
        break;
      case "/case":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CaseStudyPage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/module" element={<Module />} />
      <Route path="/case" element={<Case />} />
    </Routes>
  );
}
export default App;
