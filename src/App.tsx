import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import FavouritesPage from "./pages/FavouritesPage";
import ContactPage from "./pages/ContactPage";

const notFound = (
  <div>
    404 Not Found <Link to="/">Go Home</Link>
  </div>
);

function App() {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Route>
          <Route path="*" element={notFound} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
