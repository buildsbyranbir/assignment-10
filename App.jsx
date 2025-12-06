import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AllProperties from './pages/AllProperties.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import AddProperty from './pages/AddProperty.jsx';
import MyProperties from './pages/MyProperties.jsx';
import MyReviews from './pages/MyReviews.jsx';
import Error404 from './pages/Error404.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<AllProperties />} />
            <Route 
              path="/property/:id" 
              element={
                <PrivateRoute>
                  <PropertyDetails />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/add-property" 
              element={
                <PrivateRoute>
                  <AddProperty />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/my-properties" 
              element={
                <PrivateRoute>
                  <MyProperties />
                </PrivateRoute>
              } 
            />
            
            <Route 
              path="/my-reviews" 
              element={
                <PrivateRoute>
                  <MyReviews />
                </PrivateRoute>
              } 
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;