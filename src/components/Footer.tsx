import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center text-2xl font-bold bg-blue-600 dark:bg-purple-950 flex-row mt-10 gap-10 p-6 text-center ">
      <section className="flex flex-col gap-4">
        <Link
          to="/contact"
          className="hover:bg-white p-1 dark:hover:bg-black rounded transition duration-500"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="hover:bg-white p-1 dark:hover:bg-black rounded transition duration-500"
        >
          About
        </Link>
      </section>
      <section className="flex flex-col gap-4">
        <p className="p-1">
          &copy; {new Date().getFullYear()} Movie Search. All rights reserved.
        </p>
        <p className="p-1">
          Made by <strong>Zura Shubitidze</strong>
        </p>
      </section>
    </div>
  );
};

export default Footer;
