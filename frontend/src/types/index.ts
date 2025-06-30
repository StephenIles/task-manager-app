export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'member';
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string; // User ID
  assignedBy?: string; // User ID
  teamId?: string;
  dueDate?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  members: TeamMember[];
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  userId: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface TaskFormData {
  title: string;
  description?: string;
  status: Task['status'];
  priority: Task['priority'];
  assignedTo?: string;
  dueDate?: string;
  tags: string[];
}

export interface ApiError {
  message: string;
  status: number;
}
