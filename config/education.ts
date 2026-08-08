import { EducationItem } from '@/types';

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Master of Science in Computer Science & Artificial Intelligence',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    year: '2019',
    highlights: [
      'Specialization in Machine Learning, Neural Networks, and Distributed Systems.',
      'Graduate Research Thesis: "Low-Latency Model Serving in Containerized Microservices".',
      'President of Artificial Intelligence & Robotics Society.',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Texas at Austin',
    location: 'Austin, TX',
    year: '2017',
    highlights: [
      'Graduated Magna Cum Laude (GPA: 3.88/4.0).',
      'Coursework: Data Structures & Algorithms, Operating Systems, Database Management, Software Design.',
      'Dean’s Honor List for 6 Consecutive Semesters.',
    ],
  },
];
