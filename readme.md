# 🏠 HomeNest – Real Estate Listing Portal

🔗 **Live Website:
🔗 **Client Repository:
🔗 **Server Repository: 

## 📌 Project Overview

**HomeNest** is a full-stack MERN real estate listing platform where property owners can post rental or sale listings, and users can browse, search, filter, rate, and review properties.  
The platform supports authentication, protected routes, CRUD operations, and a modern responsive UI.

---

## 🚀 Key Features

- 🔐 **Authentication System**
  - Email & Password login
  - Google Authentication
  - Protected routes with Firebase Auth

- 🏘️ **Property Management (CRUD)**
  - Add, update, delete property listings
  - Only logged-in users can manage their own properties
  - Data stored securely in MongoDB

- 🔎 **Browse & Filter Properties**
  - View all properties
  - Backend sorting (price / date)
  - Search properties by name

- ⭐ **Ratings & Reviews**
  - Rate properties from 1 to 5 stars
  - Write short reviews
  - View personal ratings in “My Ratings” page

- 🎨 **Modern UI & UX**
  - Responsive design (mobile, tablet, desktop)
  - Loading spinner during data fetch
  - Toast/SweetAlert notifications
  - Custom 404 page
  - Light/Dark mode support

---

## 🧭 Website Pages & Routes

### 🌐 Public Routes
- Home
- All Properties
- Login
- Register
- 404 / Not Found

### 🔒 Private Routes
- Add Property
- My Properties
- Property Details
- My Ratings

---

## 🏠 Home Page Sections

- Banner Slider (3 slides)
- Featured Real Estate (latest 6 properties from DB)
- Why Choose Us (static)
- Two additional relevant sections

---

## 🛠️ Technologies Used

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- SweetAlert / React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Firebase Admin SDK (optional)

### Deployment
- Client: Netlify / Firebase
- Server: Vercel

---

## 🔐 Authentication Rules

- Password must contain:
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - Minimum 6 characters
- No email verification or forgot password implemented (as per assignment rules)
- Logged-in users stay logged in on page reload
