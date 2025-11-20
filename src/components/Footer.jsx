import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <h2 className="text-3xl font-bold text-blue-400">WarmPaws 🐾</h2>
        <p className="font-medium mt-2">
          Keeping your furry friends cozy <br />
          since 2023.
        </p>
        <p>© {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link className="link link-hover">Grooming</Link>
        <Link className="link link-hover">Boarding</Link>
        <Link className="link link-hover">Veterinary</Link>
        <Link className="link link-hover">Clothing</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link to="/" className="link link-hover">Home</Link>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
      </nav>
      
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover text-2xl">facebook</a>
          <a className="link link-hover text-2xl">youtube</a>
          <a className="link link-hover text-2xl">twitter</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;