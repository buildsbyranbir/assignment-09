import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-4xl font-bold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2">Oops! It seems this page got lost in the snow.</p>
      <Link to="/" className="btn btn-primary mt-8 text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;