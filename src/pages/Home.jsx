import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import servicesData from "../data/services.json";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  // Take first 4 items for "Popular"
  const popularServices = servicesData.slice(0, 4);

  return (
    <div>
      {/* Hero Section with Swiper */}
      <section className="w-full h-[500px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
              <div className="text-center text-white px-4" data-aos="fade-up">
                <h1 className="text-5xl font-bold mb-4">Cozy Comfort for Your Pet</h1>
                <p className="text-xl mb-6">Keep them warm and happy this winter season.</p>
                <Link to="/services" className="btn btn-primary border-none text-white">Explore Services</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
               <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Winter Adventures Await</h1>
                <p className="text-xl mb-6">Get the best gear and care for outdoor fun.</p>
                <Link to="/services" className="btn btn-secondary text-white">Book Now</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">Expert Veterinary Care</h1>
                <p className="text-xl mb-6">Health checks specifically for the cold months.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900" data-aos="fade-down">Popular Winter Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service) => (
            <div key={service.serviceId} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow" data-aos="zoom-in">
              <figure className="h-48 overflow-hidden">
                <img src={service.image} alt={service.serviceName} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-lg">{service.serviceName}</h2>
                <p className="text-sm text-gray-500">{service.providerName}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="badge badge-accent text-white font-bold">${service.price}</span>
                  <span className="flex items-center text-yellow-500">★ {service.rating}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link to={`/service/${service.serviceId}`} className="btn btn-primary btn-sm w-full text-white">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
             <Link to="/services" className="btn btn-outline btn-primary">See All Services</Link>
        </div>
      </section>

      {/* Extra Section 1: Winter Care Tips */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Winter Care Tips for Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
              <div className="text-4xl mb-4">🧥</div>
              <h3 className="text-xl font-bold mb-2">Bundle Up</h3>
              <p className="text-gray-600">Short-haired dogs need sweaters or coats when going outside for walks in freezing temperatures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-bold mb-2">Protect Paws</h3>
              <p className="text-gray-600">Salt and ice chemicals can hurt paws. Wipe them after walks or use protective booties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-2">Hydration</h3>
              <p className="text-gray-600">Pets can get dehydrated in winter too. Ensure they always have fresh, unfrozen water.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Meet Our Experts */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Meet Our Expert Vets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { name: "Dr. Sarah Smith", role: "Chief Veterinarian", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" },
                { name: "Dr. John Doe", role: "Surgeon", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
                { name: "Dr. Emily White", role: "Nutritionist", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop" },
                { name: "Dr. Mike Brown", role: "Dermatologist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
            ].map((vet, idx) => (
                <div key={idx} className="text-center" data-aos="flip-left" data-aos-delay={idx * 100}>
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={vet.img} alt={vet.name} />
                        </div>
                    </div>
                    <h3 className="font-bold text-lg">{vet.name}</h3>
                    <p className="text-sm text-gray-500">{vet.role}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;