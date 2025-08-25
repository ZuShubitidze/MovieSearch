const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-purple-950 text-white flex-col">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Movie Search. All rights reserved.
      </p>
      <p>
        Made by <strong>Zura Shubitidze</strong>
      </p>
    </div>
  );
};

export default Footer;
