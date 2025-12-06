import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-9xl font-bold text-primary">404</h1>
                    <h2 className="text-4xl font-bold mt-4">Page Not Found</h2>
                    <p className="py-6">Sorry, we couldn't find the page you're looking for. It might have been removed or the link is broken.</p>
                    <Link to="/" className="btn btn-primary">Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;