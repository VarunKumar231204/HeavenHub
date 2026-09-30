live demo link of my Project HeavenHub - "https://major-project-ojhp.onrender.com/listings"


# 🏡 HeavenHub

**HeavenHub** is a full-stack accommodation listing web application that allows users to discover, explore, and manage property listings through an interactive and user-friendly interface.

The project is built using the **MERN-inspired architecture with Node.js, Express.js, MongoDB and EJS**, with server-side rendered pages and Bootstrap for responsive UI design.

---

## 🌐 Overview

Finding suitable accommodation can be difficult when property information is scattered across different platforms.

**HeavenHub** provides a centralized platform where users can browse accommodation listings, view detailed property information, and interact with listings through a clean and responsive web interface.

The application demonstrates the implementation of a complete full-stack web application including:

* Frontend UI
* Backend server
* RESTful routing
* Database integration
* Server-side rendering
* Form handling
* Dynamic pages
* CRUD operations
* Authentication and authorization
* Image-based property listings

---

## ✨ Features

### 🏠 Property Listings

* Browse available accommodation listings
* View property details
* Display property images
* View location and pricing information
* Explore different types of accommodations

### 🔍 Search & Discovery

* Browse listings through the platform
* Explore properties based on available information
* Category/location-oriented browsing

### 📝 Listing Management

Users can create and manage property listings.

Supported operations include:

```text
Create → Read → Update → Delete
```

### 👤 User Authentication

The application supports user authentication so that users can securely access functionality associated with their accounts.

### ⭐ Reviews

Users can interact with listings through reviews, allowing properties to receive feedback from users.

### 📱 Responsive Design

The frontend uses **Bootstrap** to provide a responsive interface that works across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

# 🛠️ Tech Stack

| Technology          | Purpose                   |
| ------------------- | ------------------------- |
| **Node.js**         | JavaScript runtime        |
| **Express.js**      | Backend web framework     |
| **MongoDB**         | Database                  |
| **Mongoose**        | MongoDB object modeling   |
| **EJS**             | Server-side templating    |
| **EJS-Mate**        | EJS layout management     |
| **Bootstrap**       | Responsive frontend UI    |
| **JavaScript**      | Client-side functionality |
| **HTML5**           | Page structure            |
| **CSS3**            | Styling                   |
| **Express Session** | Session management        |
| **Passport.js**     | Authentication            |
| **Git & GitHub**    | Version control           |

---

# 🏗️ Application Architecture

HeavenHub follows a server-side rendered architecture.

```text
                    ┌───────────────────┐
                    │      Browser      │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │     Express.js    │
                    │      Server       │
                    └─────────┬─────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
        ┌──────────┐    ┌──────────┐    ┌───────────┐
        │  Routes  │    │Controllers│    │ Middleware │
        └────┬─────┘    └─────┬────┘    └───────────┘
             │                │
             └────────┬───────┘
                      ▼
                ┌─────────────┐
                │  Mongoose   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │   MongoDB   │
                └─────────────┘
```

---

# 📁 Project Structure

```text
HeavenHub/
│
├── controllers/
│   ├── listings.js
│   └── reviews.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   └── edit.ejs
│   │
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   └── ExpressError.js
│
├── init/
│   └── data.js
│
├── app.js
├── schema.js
├── middleware.js
├── package.json
├── package-lock.json
└── README.md
```

> The exact structure may vary depending on the current version of the project.

---

# 🔄 Application Flow

A typical request flows through the application as follows:

```text
User
 │
 ▼
Browser
 │
 ▼
Express Route
 │
 ▼
Middleware
 │
 ▼
Controller
 │
 ▼
Mongoose Model
 │
 ▼
MongoDB
 │
 ▼
Controller
 │
 ▼
EJS Template
 │
 ▼
HTML Response
 │
 ▼
Browser
```

---

# 🗄️ Database Design

HeavenHub uses **MongoDB** as its primary database.

The application organizes data into collections such as:

```text
Users
   │
   └── User information

Listings
   │
   ├── Title
   ├── Description
   ├── Image
   ├── Price
   ├── Location
   └── Country

Reviews
   │
   ├── Comment
   ├── Rating
   ├── Author
   └── Listing
```

Relationships between users, listings and reviews are handled using MongoDB references through Mongoose.

---

# 🔐 Authentication & Authorization

HeavenHub includes user authentication functionality.

The authentication flow can be represented as:

```text
Signup
  ↓
Create User
  ↓
Login
  ↓
Create Session
  ↓
Authenticated User
  ↓
Access Protected Features
```

Authorization ensures that users can only perform actions they are permitted to perform, such as modifying or deleting their own listings.

---

# 📝 CRUD Operations

A major part of HeavenHub is the implementation of CRUD functionality.

### Create

Users can create a new property listing.

```text
POST /listings
```

### Read

Users can view available listings and individual listing details.

```text
GET /listings
GET /listings/:id
```

### Update

Authorized users can edit their listings.

```text
PUT /listings/:id
```

### Delete

Authorized users can remove listings.

```text
DELETE /listings/:id
```

---

# ⭐ Review System

Users can leave reviews for listings.

A review generally contains:

```text
Rating
Comment
Author
Listing
```

Reviews are associated with both the user who created them and the listing they belong to.

---

# 🎨 Frontend

The frontend is built using:

* HTML
* CSS
* JavaScript
* EJS
* Bootstrap

EJS is used to dynamically generate HTML pages using data received from the backend.

Reusable components such as the navigation bar, footer and flash messages are maintained separately using EJS partials.

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/VarunKumar231204/HeavenHub.git
```

Navigate to the project:

```bash
cd HeavenHub
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

Replace the values with your own configuration.

> Never commit `.env` files or database credentials to GitHub.

---

## 4. Start MongoDB

Make sure MongoDB is available either through:

* MongoDB Atlas
* Local MongoDB installation

---

## 5. Start the Application

Run:

```bash
node app.js
```

For development, if `nodemon` is configured:

```bash
npx nodemon app.js
```

The application will start on the configured local port.

For example:

```text
http://localhost:8080
```

---

# 🌱 Database Initialization

If the project contains sample/initial data, it can be loaded using the initialization script.

For example:

```bash
node init/data.js
```

This can populate the database with sample property listings for development and testing.

---

# 🧪 Example User Journey

```text
1. User opens HeavenHub
          ↓
2. Browses available listings
          ↓
3. Opens a listing
          ↓
4. Views property information
          ↓
5. Creates an account
          ↓
6. Logs in
          ↓
7. Creates a listing
          ↓
8. Updates listing when required
          ↓
9. Users can leave reviews
          ↓
10. Listing can be managed by its owner
```

---

# 🧩 Key Concepts Demonstrated

This project demonstrates practical implementation of several full-stack development concepts:

### Backend

* Node.js
* Express.js
* RESTful routing
* Middleware
* Controllers
* Error handling

### Database

* MongoDB
* Mongoose
* Schemas
* Models
* References
* CRUD operations

### Frontend

* EJS
* Server-side rendering
* Bootstrap
* Responsive design
* Reusable components

### Authentication

* User registration
* Login/logout
* Sessions
* Authorization
* Protected routes

### Development

* Git
* GitHub
* Environment variables
* MVC-style project organization

---

# 🚀 Future Improvements

Possible improvements for HeavenHub include:

* [ ] Advanced property search
* [ ] Price-range filtering
* [ ] Location-based search
* [ ] Interactive maps
* [ ] Image upload and cloud storage
* [ ] Wishlist/favourites
* [ ] User profile dashboard
* [ ] Booking functionality
* [ ] Online payment integration
* [ ] Property availability calendar
* [ ] Admin dashboard
* [ ] Email notifications
* [ ] Improved search using MongoDB indexes
* [ ] Deployment with production database
* [ ] API layer for mobile applications

---

# 🔒 Security Considerations

The following practices should be followed when deploying HeavenHub:

* Store secrets in environment variables.
* Never commit `.env` files.
* Validate user input.
* Sanitize user-generated content.
* Protect authenticated routes.
* Verify listing ownership before editing/deleting.
* Use secure session configuration in production.
* Use HTTPS when deployed.

---

# 📸 Screenshots

Add screenshots of the application here to showcase the UI.

Example:

```text
screenshots/
├── home.png
├── listings.png
├── listing-details.png
├── login.png
└── create-listing.png
```

Then display them in the README:

```markdown
![Home Page](screenshots/home.png)

![Listings](screenshots/listings.png)

![Listing Details](screenshots/listing-details.png)
```

---

# 🎯 Project Objective

The primary objective of HeavenHub is to develop a complete full-stack web application that demonstrates how a real-world accommodation platform can be designed using modern web development technologies.

The project focuses on implementing the complete flow from **frontend interaction → backend processing → database operations → dynamic response generation**.

---

# 👨‍💻 Author

## Varun Kumar

**B.Tech Information Technology**

Guru Jambheshwar University of Science and Technology (GJUST), Hisar

### GitHub

**VarunKumar231204**

---

# ⭐ If You Like This Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📜 License

This project was developed for educational and portfolio purposes.
