import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../data/services.json";
import { useState } from "react";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.serviceId === parseInt(id));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: ""
  });

  if (!service) {
    return <div className="text-center py-20">Service not found.</div>;
  }

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Simulate booking
    toast.success(`Successfully booked ${service.serviceName}!`);
    setFormData({ name: "", email: "", notes: "" });
    // Optional: Close modal if used, but here we just clear form
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
        <button onClick={() => navigate(-1)} className="btn btn-ghost mb-6">← Back</button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Image and Info */}
            <div data-aos="fade-right">
                <img src={service.image} alt={service.serviceName} className="w-full h-96 object-cover rounded-xl shadow-lg" />
                
                <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-start">
                         <h1 className="text-3xl font-bold text-blue-900">{service.serviceName}</h1>
                         <div className="badge badge-secondary text-white p-3">${service.price}</div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Provider:</span>
                        <span>{service.providerName}</span>
                        <span className="text-xs text-gray-400">({service.providerEmail})</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <span className="font-semibold">Rating:</span>
                        <span className="text-yellow-500">★ {service.rating}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        {service.description}
                    </p>
                     <div className="alert alert-info bg-blue-50 border-blue-200 text-sm">
                        <span>Only {service.slotsAvailable} slots available for this season!</span>
                    </div>
                </div>
            </div>

            {/* Right: Booking Form */}
            <div className="card bg-base-100 shadow-2xl h-fit" data-aos="fade-left">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">Book This Service</h2>
                    <form onSubmit={handleBooking} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pet Owner Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="John Doe" 
                                className="input input-bordered" 
                                required 
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="john@example.com" 
                                className="input input-bordered" 
                                required 
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Special Notes (Optional)</span>
                            </label>
                            <textarea 
                                name="notes"
                                className="textarea textarea-bordered h-24" 
                                placeholder="My dog is shy..."
                                value={formData.notes}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary text-white text-lg">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceDetails;