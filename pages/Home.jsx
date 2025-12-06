import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading.jsx';

// Mock data for initial rendering if API is down
const MOCK_FEATURED = [
  {
    _id: '1',
    title: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    price: 1200000,
    category: 'Sale',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    description: 'A beautiful luxury villa with premium finishes and stunning outdoor space.'
  },
  {
    _id: '2',
    title: 'City Apartment',
    location: 'New York, NY',
    price: 3500,
    category: 'Rent',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    description: 'Modern apartment in the heart of the city with skyline views.'
  },
  {
    _id: '3',
    title: 'Cozy Cottage',
    location: 'Vermont',
    price: 450000,
    category: 'Sale',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    description: 'A warm and inviting cottage perfect for a peaceful weekend escape.'
  },
  {
    _id: '4',
    title: 'Beach House',
    location: 'Miami, FL',
    price: 2000000,
    category: 'Sale',
    image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg',
    description: 'Stunning beach house with direct access to the ocean.'
  },
  {
    _id: '5',
    title: 'Office Space',
    location: 'Chicago, IL',
    price: 5000,
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60',
    description: 'Premium office space in a prime business district.'
  },
  {
    _id: '6',
    title: 'Farm Land',
    location: 'Texas',
    price: 800000,
    category: 'Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60',
    description: 'Wide open acres perfect for farming or long-term investment.'
  }
];


const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch from http://localhost:5000/properties?sort=newest&limit=6
    // Simulating network delay
    setTimeout(() => {
        setFeaturedProperties(MOCK_FEATURED);
        setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full">
      {/* Slider Section */}
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://picsum.photos/1920/1080?random=10" className="w-full object-cover" alt="Slide 1" />
          <div className="absolute flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-lg md:text-xl">Discover the best properties across the country</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://picsum.photos/1920/1080?random=11" className="w-full object-cover" alt="Slide 2" />
          <div className="absolute flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Invest in Future</h1>
            <p className="text-lg md:text-xl">Commercial and Land properties available</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://picsum.photos/1920/1080?random=12" className="w-full object-cover" alt="Slide 3" />
          <div className="absolute flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Trusted by Millions</h1>
            <p className="text-lg md:text-xl">Join our community of happy homeowners</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">Featured Properties</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <div key={property._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <figure className="h-48 w-full overflow-hidden">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title">{property.title}</h2>
                    <div className="badge badge-secondary">{property.category}</div>
                  </div>
                  <p className="text-gray-500 text-sm">{property.location}</p>
                  <p className="line-clamp-2">{property.description}</p>
                  <div className="flex items-center text-lg font-bold text-primary mt-2">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <Link to={`/property/${property._id}`} className="btn btn-primary btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-base-100 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Top Rated Listings</h3>
              <p>We verify every property to ensure you get the best value for your money.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Trusted Agents</h3>
              <p>Our network of agents are certified and ready to assist you 24/7.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p>We prioritize your security with encrypted data and transparent processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 1: Testimonials */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
                <div className="card-body">
                    <p className="italic">"HomeNest made selling my house incredible easy. The platform is intuitive and the support is amazing!"</p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">Sarah Jenkins</h4>
                            <span className="text-xs text-gray-500">Home Seller</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl border-l-4 border-secondary">
                <div className="card-body">
                    <p className="italic">"I found my dream apartment in less than a week. The filter options are lifesavers."</p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">Michael Ross</h4>
                            <span className="text-xs text-gray-500">Home Buyer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Extra Section 2: Newsletter */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Subscribe to our newsletter to get the latest property news and market deals.</p>
            <div className="join w-full max-w-md">
                <input className="input input-bordered join-item w-full text-black" placeholder="Email address" />
                <button className="btn btn-secondary join-item">Subscribe</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;