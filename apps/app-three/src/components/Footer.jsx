const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-6 border-t border-primary/10">
      <p className="text-sm text-foreground/60">
        &copy; {currentYear} Sujai Beniks J. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
