import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import MyProfile from "./pages/MyProfile";
import ServiceDetails from "./pages/ServiceDetails";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./routes/PrivateRoute";
import servicesData from "./data/services.json";

// Create a simplified wrapper for the Services page logic reusing components for brevity
// In a real large app, this would be a separate file `src/pages/Services.jsx`
const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">All Winter Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
             <div key={service.serviceId} className="card bg-base-100 shadow-xl">
              <figure className="h-48 overflow-hidden">
                <img src={service.image} alt={service.serviceName} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <p className="text-sm text-gray-500">by {service.providerName}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="badge badge-neutral text-white">${service.price}</span>
                   <a href={`/service/${service.serviceId}`} className="btn btn-primary btn-sm text-white">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;