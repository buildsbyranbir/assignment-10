import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading.jsx';

// MOCK DATA for All Properties
const MOCK_PROPERTIES = Array.from({ length: 12 }, (_, i) => ({
    _id: `${i + 1}`,
    title: `Property ${i + 1} ${i % 2 === 0 ? 'Villa' : 'Apartment'}`,
    location: i % 2 === 0 ? 'Los Angeles, CA' : 'Chicago, IL',
    price: 100000 + (i * 50000),
    category: i % 3 === 0 ? 'Rent' : 'Sale',
    image: `https://picsum.photos/400/300?random=${i + 20}`,
    user: { name: 'John Doe', image: 'https://i.pravatar.cc/150?u=john' }
}));

const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // asc or desc price

    useEffect(() => {
        setLoading(true);
        // Simulate backend fetch with search and sort params
        // In real app: axios.get(`/properties?search=${searchTerm}&sort=${sortOrder}`)
        setTimeout(() => {
            let filtered = [...MOCK_PROPERTIES];
            
            if (searchTerm) {
                filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
            }

            filtered.sort((a, b) => {
                return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
            });

            setProperties(filtered);
            setLoading(false);
        }, 800);
    }, [searchTerm, sortOrder]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Triggered via state dependency in useEffect
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">All Properties</h2>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-base-200 p-4 rounded-lg">
                <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-1/2">
                    <input 
                        type="text" 
                        placeholder="Search by Property Name..." 
                        className="input input-bordered w-full" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <span className="font-bold">Sort by Price:</span>
                    <select 
                        className="select select-bordered" 
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map(property => (
                        <div key={property._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                            <figure className="h-48 overflow-hidden">
                                <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h3 className="card-title text-lg">{property.title}</h3>
                                    <div className="badge badge-accent text-white">{property.category}</div>
                                </div>
                                <p className="text-gray-500 text-sm">📍 {property.location}</p>
                                <p className="text-xl font-bold text-primary">${property.price.toLocaleString()}</p>
                                
                                <div className="divider my-2"></div>
                                
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-8">
                                            <span className="text-xs">
                                                {property.user?.image ? <img src={property.user.image} alt="U" /> : 'U'}
                                            </span>
                                        </div>
                                    </div> 
                                    <span className="text-sm font-medium">Posted by {property.user?.name}</span>
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to={`/property/${property._id}`} className="btn btn-outline btn-primary btn-sm w-full">See Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {!loading && properties.length === 0 && (
                <div className="text-center py-20">
                    <h3 className="text-xl font-bold text-gray-500">No properties found matching your search.</h3>
                </div>
            )}
        </div>
    );
};

export default AllProperties;