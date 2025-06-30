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
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

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
   # Terminal 1 - Backend
   cd backend
   npm run dev

   # Terminal 2 - Frontend
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

- **GitHub Repository**: [Coming Soon]
- **Live Demo**: [Coming Soon]
- **API Documentation**: [Coming Soon]

## 📋 Development Progress

### Phase 1: Foundation ⏳
- [x] Project structure setup
- [ ] Git repository initialization
- [ ] Frontend React + TypeScript setup
- [ ] Backend Node.js + Express setup
- [ ] Database configuration

### Phase 2: Authentication 📋
- [ ] User registration
- [ ] User login
- [ ] JWT token management
- [ ] Protected routes

### Phase 3: Core Features 📋
- [ ] Task CRUD operations
- [ ] Task categories
- [ ] Due date management
- [ ] Task assignment

### Phase 4: Team Features 📋
- [ ] Team creation
- [ ] Member invitations
- [ ] Role-based permissions
- [ ] Collaborative task management

### Phase 5: Notifications 📋
- [ ] Email reminder system
- [ ] Real-time notifications
- [ ] Deadline alerts

### Phase 6: UI/UX 📋
- [ ] Dark/light mode toggle
- [ ] Responsive design
- [ ] Drag-and-drop interface
- [ ] Loading states and animations

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
