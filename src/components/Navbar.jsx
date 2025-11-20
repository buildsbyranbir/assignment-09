import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/my-profile">My Profile</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md px-4 sm:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl md:text-2xl font-bold text-primary">
          <span className="text-blue-500">Warm</span>Paws 🐾
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                <div className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL || "https://i.ibb.co/MgsTCcv/avater.jpg"} alt="User" />
                </div>
                </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm btn-error text-white">Logout</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm btn-outline btn-primary">Login</Link>
            <Link to="/auth/register" className="btn btn-sm btn-primary text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;