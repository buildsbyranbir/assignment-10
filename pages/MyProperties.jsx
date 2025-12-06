import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider.jsx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../components/Loading.jsx';

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock Fetch user specific properties
        setTimeout(() => {
            // Filter MOCK data where email matches user.email
            // Here just generating dummy data for the user
            setProperties([
                { _id: '101', title: 'My Old House', category: 'Sale', price: 250000, location: 'Austin, TX', postedDate: '2023-09-10' },
                { _id: '102', title: 'Downtown Studio', category: 'Rent', price: 1200, location: 'New York, NY', postedDate: '2023-10-05' }
            ]);
            setLoading(false);
        }, 800);
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform delete API call here
                setProperties(properties.filter(p => p._id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your property has been deleted.',
                    'success'
                )
            }
        })
    };

    const handleUpdate = (id) => {
        // Since we can't create unlimited pages dynamically in this constrained output,
        // We will simulate update via a popup form or navigate to a hypothetical route
        // For this assignment, let's just show an alert that would be the update page
        Swal.fire('Info', 'Navigate to Update Page for ID: ' + id, 'info');
    };

    if (loading) return <Loading />;

    return (
        <div className="max-w-6xl mx-auto p-4 py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">My Properties</h2>
            
            {properties.length === 0 ? (
                <div className="alert alert-info">You have not added any properties yet.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map(property => (
                        <div key={property._id} className="card bg-base-100 shadow-xl border border-gray-200">
                            <div className="card-body">
                                <h2 className="card-title justify-between">
                                    {property.title}
                                    <div className="badge badge-secondary">{property.category}</div>
                                </h2>
                                <p><strong>Location:</strong> {property.location}</p>
                                <p><strong>Price:</strong> ${property.price}</p>
                                <p className="text-xs text-gray-500">Posted: {property.postedDate}</p>
                                
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/property/${property._id}`} className="btn btn-xs btn-ghost">View</Link>
                                    <button onClick={() => handleUpdate(property._id)} className="btn btn-xs btn-warning">Update</button>
                                    <button onClick={() => handleDelete(property._id)} className="btn btn-xs btn-error">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyProperties;