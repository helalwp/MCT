export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  email: string;
  phone: string;
  image: string;
  expertise: string[];
}

export interface Course {
  code: string;
  title: string;
  credits: number;
  description: string;
  semester: number;
  type: 'Core' | 'Elective';
}

export interface Project {
  id: string;
  title: string;
  studentName: string;
  description: string;
  image: string;
  category: '3D' | 'Web' | 'Animation' | 'Graphic Design';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  type: 'Event' | 'News';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}