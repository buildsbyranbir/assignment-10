import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../components/Loading.jsx';
import { AuthContext } from '../providers/AuthProvider.jsx';

const MOCK_DETAIL = {
    _id: '1', 
    title: 'Luxury Villa', 
    description: 'This is a detailed description of the Luxury Villa. It features 5 bedrooms, 4 bathrooms, a swimming pool, and a large garden. Located in a prime area with easy access to schools and malls.', 
    location: 'Beverly Hills, CA', 
    price: 1200000, 
    category: 'Sale', 
    image: 'https://picsum.photos/800/600?random=1',
    postedDate: '2023-10-25',
    agent: { name: 'Jane Smith', email: 'jane@homenest.com', photo: 'https://i.pravatar.cc/150?u=jane' }
};

const MOCK_REVIEWS = [
    { _id: 1, user: 'Alice', rating: 5, comment: 'Amazing place!', date: '2023-11-01' },
    { _id: 2, user: 'Bob', rating: 4, comment: 'Great value, but traffic is loud.', date: '2023-11-05' }
];

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [property, setProperty] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch property details by ID
        setTimeout(() => {
            // In a real app, find by ID
            setProperty({ ...MOCK_DETAIL, _id: id });
            setReviews(MOCK_REVIEWS);
            setLoading(false);
        }, 800);
    }, [id]);

    const handleAddReview = (e) => {
        e.preventDefault();
        // Post review to backend
        const review = {
            _id: Date.now(),
            user: user.displayName,
            rating: parseInt(newReview.rating),
            comment: newReview.comment,
            date: new Date().toISOString().split('T')[0]
        };
        
        setReviews([...reviews, review]);
        setNewReview({ rating: 5, comment: '' });
        setShowModal(false);
        Swal.fire('Success', 'Review added successfully!', 'success');
    };

    if (loading) return <Loading />;
    if (!property) return <div className="text-center mt-20">Property Not Found</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden mb-10">
                <figure className="lg:w-1/2">
                    <img src={property.image} alt="Album" className="w-full h-full object-cover"/>
                </figure>
                <div className="card-body lg:w-1/2">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title text-3xl">{property.title}</h2>
                        <span className="badge badge-lg badge-primary">{property.category}</span>
                    </div>
                    <p className="text-2xl font-bold text-secondary my-2">${property.price.toLocaleString()}</p>
                    <p className="flex items-center text-gray-600 gap-2">📍 {property.location}</p>
                    
                    <div className="divider"></div>
                    
                    <p className="py-4">{property.description}</p>
                    
                    <div className="flex items-center gap-4 mt-4 bg-base-200 p-4 rounded-lg">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={property.agent.photo} alt="Agent" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Agent: {property.agent.name}</p>
                            <p className="text-sm">{property.agent.email}</p>
                            <p className="text-xs text-gray-500">Posted on: {property.postedDate}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <section className="bg-base-100 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Ratings & Reviews</h3>
                    <button onClick={() => setShowModal(true)} className="btn btn-outline btn-secondary">Write a Review</button>
                </div>

                <div className="grid gap-4">
                    {reviews.map(review => (
                        <div key={review._id} className="chat chat-start w-full">
                            <div className="chat-image avatar placeholder">
                                <div className="w-10 rounded-full bg-neutral text-neutral-content">
                                    <span>{review.user.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="chat-header">
                                {review.user}
                                <time className="text-xs opacity-50 ml-2">{review.date}</time>
                            </div>
                            <div className="chat-bubble w-full bg-base-200 text-base-content">
                                <div className="rating rating-xs mb-1">
                                    {[1,2,3,4,5].map(star => (
                                        <input key={star} type="radio" className="mask mask-star-2 bg-orange-400" checked={review.rating >= star} readOnly />
                                    ))}
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Review Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Write a Review</h3>
                        <form onSubmit={handleAddReview} className="py-4 space-y-4">
                            <div className="form-control">
                                <label className="label">Rating</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="5" 
                                    className="input input-bordered" 
                                    value={newReview.rating}
                                    onChange={(e) => setNewReview({...newReview, rating: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">Comment</label>
                                <textarea 
                                    className="textarea textarea-bordered" 
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <div className="modal-action">
                                <button type="button" className="btn" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetails;