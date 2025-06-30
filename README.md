# 📋 Task Manager App

A full-stack task manager app featuring user authentication, team collaboration, task assignment, and deadline notifications. Designed with a clean, responsive UI supporting dark/light modes.

## 🧰 Tech Stack

### Frontend
- **React** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS framework

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication tokens
- **Resend/SendGrid** - Email notifications

## ✅ MVP Features

- [ ] User sign-up and login with JWT
- [ ] Create, edit, delete tasks
- [ ] Assign tasks to team members
- [ ] Real-time email deadline reminders
- [ ] Dark/light mode toggle
- [ ] Mobile responsive design
- [ ] Bonus: Drag-and-drop task ordering (react-beautiful-dnd)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/StephenIles/task-manager-app.git
   cd task-manager-app
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Test the theme toggle and mobile menu
   - Try the search functionality

### Backend Setup (Coming Soon)

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # Copy example files and configure
   cp .env.example .env
   ```

5. **Start development servers**
   ```bash
   # Terminal 1 - Backend (Coming Soon)
   cd backend
   npm run dev

   # Terminal 2 - Frontend (Working Now!)
   cd frontend
   npm run dev
   ```

## 📁 Project Structure

```
task-manager-app/
├── frontend/                 # React TypeScript app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── types/           # TypeScript type definitions
│   │   └── services/        # API calls
│   ├── public/
│   └── package.json
├── backend/                  # Node.js Express API
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── models/          # Database models
│   │   ├── middleware/      # Express middleware
│   │   ├── controllers/     # Route controllers
│   │   ├── utils/           # Utility functions
│   │   └── config/          # Configuration files
│   └── package.json
└── README.md
```

## 🔗 Links

- **GitHub Repository**: [https://github.com/StephenIles/task-manager-app](https://github.com/StephenIles/task-manager-app)
- **Live Demo**: [Coming Soon]
- **API Documentation**: [Coming Soon]

## 📋 Development Progress

### Phase 1: Foundation ✅ COMPLETE
- [x] Project structure setup
- [x] Git repository initialization and GitHub integration
- [x] Frontend React + TypeScript setup with Vite
- [x] TailwindCSS configuration with custom theme
- [x] TypeScript types and interfaces defined
- [x] Dark/light theme system implemented
- [ ] Backend Node.js + Express setup
- [ ] Database configuration

### Phase 2: UI Components ⏳ IN PROGRESS
- [x] **Navbar Component** - Fully responsive with search, theme toggle, and mobile menu
- [x] **Theme Provider** - Dark/light mode functionality
- [x] **Basic Page Structure** - Home, Login, Register, Dashboard, Tasks pages
- [x] **Protected Routes** - Authentication wrapper component
- [ ] Login/Register forms
- [ ] Dashboard layout
- [ ] Task management interface

### Phase 3: Authentication 📋 PLANNED
- [ ] User registration
- [ ] User login
- [ ] JWT token management
- [ ] Protected routes implementation
- [ ] User session management

### Phase 4: Core Features 📋 PLANNED
- [ ] Task CRUD operations
- [ ] Task categories and tags
- [ ] Due date management
- [ ] Task assignment to users
- [ ] Task status management

### Phase 5: Team Features 📋 PLANNED
- [ ] Team creation
- [ ] Member invitations
- [ ] Role-based permissions
- [ ] Collaborative task management

### Phase 6: Notifications 📋 PLANNED
- [ ] Email reminder system
- [ ] Real-time notifications
- [ ] Deadline alerts

### Phase 7: Advanced UI/UX ✅ PARTIALLY COMPLETE
- [x] Dark/light mode toggle
- [x] Responsive design (mobile-first)
- [x] Professional styling with TailwindCSS
- [ ] Drag-and-drop interface
- [ ] Loading states and animations
- [ ] Advanced micro-interactions

## 🚀 Current Status

**✅ MILESTONE 1 COMPLETE: Foundation & Navigation**

**What's Working:**
- ✅ React app running successfully at `http://localhost:3000`
- ✅ Professional Navbar with search, notifications, and user profile
- ✅ Theme toggle (dark/light mode) working perfectly
- ✅ Mobile-responsive design with hamburger menu
- ✅ Routing system with React Router
- ✅ TypeScript integration with proper type definitions
- ✅ TailwindCSS with custom color scheme and utility classes

**Latest Features Added:**
- Professional navigation with cyan branding
- Search functionality in header
- Notification badges and user menu
- Mobile-responsive design
- Theme persistence in localStorage

**Next Up:**
- Login/Register page implementation
- Dashboard layout with task overview
- Task creation and management features

## 🗒️ Notes & Roadblocks

- Plan to implement team roles and permissions later
- Email notifications need robust testing for reliability
- Consider using WebSockets for real-time updates
- Implement proper error handling and validation

## 🧑‍💻 Author

**Stephen Iles** - Junior Full-Stack Web Developer
- Portfolio: [Your Portfolio URL]
- GitHub: [@stepheniles](https://github.com/stepheniles)
- LinkedIn: [Stephen Iles](https://linkedin.com/in/stephen-iles)

---

*Built as part of my portfolio to demonstrate full-stack development skills*
