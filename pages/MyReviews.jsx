import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider.jsx';
import Loading from '../components/Loading.jsx';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock fetch reviews written by this user
        setTimeout(() => {
            setReviews([
                { 
                    _id: 1, 
                    propertyName: 'Luxury Villa', 
                    propertyImage: 'https://picsum.photos/100/100?random=1',
                    rating: 5, 
                    comment: 'Absolutely loved staying here!', 
                    date: '2023-11-01' 
                },
                { 
                    _id: 2, 
                    propertyName: 'City Apartment', 
                    propertyImage: 'https://picsum.photos/100/100?random=2',
                    rating: 3, 
                    comment: 'Good location but noisy neighbors.', 
                    date: '2023-10-15' 
                }
            ]);
            setLoading(false);
        }, 800);
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="max-w-5xl mx-auto p-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">My Ratings & Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map(review => (
                    <div key={review._id} className="card card-side bg-base-100 shadow-xl p-4 items-center">
                        <figure className="w-24 h-24 flex-shrink-0">
                            <img src={review.propertyImage} alt="Property" className="rounded-xl w-full h-full object-cover" />
                        </figure>
                        <div className="card-body py-2 px-4">
                            <h3 className="card-title text-base">{review.propertyName}</h3>
                            <div className="rating rating-sm">
                                {[1,2,3,4,5].map(star => (
                                    <input key={star} type="radio" className="mask mask-star-2 bg-orange-400" checked={review.rating === star} readOnly />
                                ))}
                            </div>
                            <p className="text-sm italic">"{review.comment}"</p>
                            <p className="text-xs text-gray-400">{review.date}</p>
                            
                            <div className="card-actions justify-end">
                                <button className="btn btn-xs btn-error btn-outline">Delete Review</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;