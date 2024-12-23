const Footer = () => {
  return (
    <footer className="mt-10 py-5 bg-black text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CardioCare | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;