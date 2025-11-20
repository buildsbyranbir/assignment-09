import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleLogin, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Password Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password too short!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Missing uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Missing lowercase letter!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // Update Profile immediately
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
             // Force reload user state or manually update to show name in navbar immediately
             const updatedUser = { ...result.user, displayName: name, photoURL: photo };
             setUser(updatedUser);
             toast.success("Registration Successful!");
             navigate("/");
          })
          .catch(err => toast.error("Profile update failed: " + err.message));
      })
      .catch((error) => {
        toast.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Signup Successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-primary">Sign Up</h1>
          <p className="py-6">
            Join the WarmPaws family! Register to access exclusive winter care services for your beloved pets.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="https://..." className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-12 text-sm text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Register</button>
            </div>
          </form>
           <div className="px-8 pb-8">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full">
              Signup with Google
            </button>
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-600 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;