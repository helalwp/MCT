import { FacultyMember, Course, Project, NewsItem, Testimonial } from './types';

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Eleanor Vance',
    designation: 'Department Head & Professor',
    qualification: 'Ph.D. in Computer Vision, MIT',
    email: 'e.vance@mct.edu',
    phone: '+1 (555) 010-1001',
    image: 'https://picsum.photos/seed/faculty1/300/300',
    expertise: ['Computer Vision', 'AI in Media']
  },
  {
    id: '2',
    name: 'Prof. Marcus Chen',
    designation: 'Associate Professor',
    qualification: 'M.F.A. in Digital Arts',
    email: 'm.chen@mct.edu',
    phone: '+1 (555) 010-2002',
    image: 'https://picsum.photos/seed/faculty2/300/300',
    expertise: ['3D Animation', 'Game Design']
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    designation: 'Senior Lecturer',
    qualification: 'M.Sc. in Interactive Media',
    email: 's.jenkins@mct.edu',
    phone: '+1 (555) 010-3003',
    image: 'https://picsum.photos/seed/faculty3/300/300',
    expertise: ['UI/UX Design', 'Web Engineering']
  },
  {
    id: '4',
    name: 'David Okonjo',
    designation: 'Lecturer',
    qualification: 'M.Sc. in Sound Engineering',
    email: 'd.okonjo@mct.edu',
    phone: '+1 (555) 010-4004',
    image: 'https://picsum.photos/seed/faculty4/300/300',
    expertise: ['Audio Production', 'Sound Design']
  }
];

export const COURSES_DATA: Course[] = [
  { code: 'MCT-101', title: 'Introduction to Multimedia', credits: 3, semester: 1, type: 'Core', description: 'Fundamentals of text, image, audio, and video processing.' },
  { code: 'MCT-102', title: 'Graphic Design Fundamentals', credits: 3, semester: 1, type: 'Core', description: 'Principles of design, typography, and color theory.' },
  { code: 'MCT-201', title: 'Web Engineering I', credits: 3, semester: 2, type: 'Core', description: 'HTML, CSS, and JavaScript basics for responsive web design.' },
  { code: 'MCT-205', title: 'Digital Photography', credits: 2, semester: 2, type: 'Elective', description: 'Techniques in composition, lighting, and editing.' },
  { code: 'MCT-301', title: '3D Modeling & Animation', credits: 4, semester: 3, type: 'Core', description: 'Creating 3D assets and animations using industry-standard tools.' },
  { code: 'MCT-304', title: 'UX/UI Design Strategy', credits: 3, semester: 3, type: 'Core', description: 'User-centered design process, prototyping, and usability testing.' },
  { code: 'MCT-401', title: 'Advanced Web Development', credits: 3, semester: 4, type: 'Elective', description: 'React, Node.js, and modern full-stack development.' },
  { code: 'MCT-402', title: 'Virtual Reality Systems', credits: 4, semester: 4, type: 'Elective', description: 'Development of immersive VR experiences.' },
];

export const PROJECTS_DATA: Project[] = [
  { id: '1', title: 'Neon Cyberpunk City', studentName: 'Alex River', category: '3D', image: 'https://picsum.photos/seed/proj1/600/400', description: 'A fully rendered 3D environment focusing on lighting and texture.' },
  { id: '2', title: 'Eco-Track App', studentName: 'Jamie Smith', category: 'Web', image: 'https://picsum.photos/seed/proj2/600/400', description: 'A React Native application for tracking personal carbon footprints.' },
  { id: '3', title: 'The Lost Robot', studentName: 'Casey Lee', category: 'Animation', image: 'https://picsum.photos/seed/proj3/600/400', description: 'Short animated film exploring themes of AI and emotion.' },
  { id: '4', title: 'Brand Identity: Zenith', studentName: 'Jordan Kim', category: 'Graphic Design', image: 'https://picsum.photos/seed/proj4/600/400', description: 'Complete corporate branding package including logo and stationery.' },
];

export const NEWS_DATA: NewsItem[] = [
  { id: '1', title: 'Annual Tech Fest 2024', date: 'Oct 15, 2024', type: 'Event', summary: 'Join us for a showcase of student innovations and guest lectures from industry leaders.' },
  { id: '2', title: 'New VR Lab Inauguration', date: 'Sep 01, 2024', type: 'News', summary: 'MCT Department opens a state-of-the-art Virtual Reality laboratory funded by TechCorp.' },
  { id: '3', title: 'Workshop: AI in Art', date: 'Nov 05, 2024', type: 'Event', summary: 'A hands-on workshop exploring Generative AI tools for creative workflows.' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', name: 'Michael Ross', role: 'Alumni, Class of 2020', content: 'The MCT program gave me the technical foundation and creative freedom to launch my own design studio.', avatar: 'https://picsum.photos/seed/user1/100/100' },
  { id: '2', name: 'Linda Zhang', role: 'Final Year Student', content: 'The faculty support here is incredible. They push you to experiment and innovate beyond the curriculum.', avatar: 'https://picsum.photos/seed/user2/100/100' },
];