import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const propertyName = form.propertyName.value;
        const price = form.price.value;
        const category = form.category.value;
        const location = form.location.value;
        const image = form.image.value;
        const description = form.description.value;

        const newProperty = {
            title: propertyName,
            price: parseFloat(price),
            category,
            location,
            image,
            description,
            userEmail: user.email,
            userName: user.displayName,
            postedDate: new Date().toISOString()
        };

        // Simulate Database Post
        console.log("Sending to DB:", newProperty);
        
        // Mock Success
        Swal.fire({
            title: 'Success!',
            text: 'Property added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        }).then(() => {
            navigate('/my-properties');
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-10 bg-base-100 shadow-2xl rounded-xl my-10 border border-base-200">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Add New Property</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Property Name</span></label>
                        <input type="text" name="propertyName" placeholder="e.g. Luxury Villa" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Price ($)</span></label>
                        <input type="number" name="price" placeholder="e.g. 500000" className="input input-bordered" required />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Category</span></label>
                        <select name="category" className="select select-bordered w-full">
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Commercial</option>
                            <option>Land</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" name="location" placeholder="City, Area" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text">Image URL</span></label>
                    <input type="url" name="image" placeholder="https://..." className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text">Description</span></label>
                    <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Description..." required></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label"><span className="label-text">User Name</span></label>
                        <input type="text" value={user?.displayName || ''} readOnly className="input input-bordered bg-base-200" />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">User Email</span></label>
                        <input type="text" value={user?.email || ''} readOnly className="input input-bordered bg-base-200" />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Add Property</button>
                </div>
            </form>
        </div>
    );
};

export default AddProperty;