import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();
  const { resetPassword } = useContext(AuthContext);

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [searchParams]);

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
        toast.error("Please enter your email address.");
        return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        // Challenge: Redirect to Gmail (UI only)
        window.location.href = "https://mail.google.com/";
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-4">Reset Password</h2>
          <form onSubmit={handleReset}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;