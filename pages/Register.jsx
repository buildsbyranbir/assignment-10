import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider.jsx';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password Validation
        if (password.length < 6) {
            Swal.fire('Error', 'Password must be at least 6 characters', 'error');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire('Error', 'Password must contain an uppercase letter', 'error');
            return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire('Error', 'Password must contain a lowercase letter', 'error');
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(() => {
                        Swal.fire('Success', 'User created successfully', 'success');
                        navigate('/');
                    });
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire('Success', 'Registered with Google', 'success');
                navigate('/');
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };

    return (
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Register!</h1>
                    <p className="py-6">Join HomeNest and find your dream property today.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="phot url link" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="divider">OR</div>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full gap-2">
                            <FaGoogle /> Sign up with Google
                        </button>
                        <label className="label mt-2 justify-center">
                            <span className="label-text-alt">Already have an account? <Link to="/login" className="link link-hover text-primary font-bold">Login</Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;