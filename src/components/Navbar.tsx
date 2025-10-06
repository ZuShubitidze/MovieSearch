import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "./theme/mode-toggle";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex gap-8 lg:gap-20 px-6 mb-10 bg-blue-600 dark:bg-purple-950 items-center">
        <ModeToggle />
        <Link
          to="/"
          className="hover:bg-white dark:hover:bg-black p-6 rounded transition duration-500 text-2xl font-bold"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:bg-white dark:hover:bg-black p-6 rounded transition duration-500 text-2xl font-bold"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-white dark:hover:bg-black p-6 rounded transition duration-500 text-2xl font-bold"
        >
          Contact
        </Link>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navbar;
