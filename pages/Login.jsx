import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider.jsx';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire('Success', 'Logged in successfully', 'success');
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire('Success', 'Logged in with Google', 'success');
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire('Error', error.message, 'error');
            });
    };

    return (
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Login now!</h1>
                    <p className="py-6">Access your personalized real estate dashboard.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full gap-2">
                            <FaGoogle /> Login with Google
                        </button>
                        <label className="label mt-2 justify-center">
                            <span className="label-text-alt">New here? <Link to="/register" className="link link-hover text-primary font-bold">Create account</Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;