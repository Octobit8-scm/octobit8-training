export interface Course {
  id: string
  name: string
  description: string
  duration: string
  price: number
}

export const courses: Course[] = [
  {
    id: 'devops-101',
    name: 'DevOps Foundations',
    description: 'Learn the basics of DevOps, CI/CD, and automation.',
    duration: '6 weeks',
    price: 4999
  },
  {
    id: 'devops-advanced',
    name: 'Advanced DevOps',
    description: 'Deep dive into Kubernetes, Docker, and cloud-native DevOps.',
    duration: '8 weeks',
    price: 7999
  },
  {
    id: 'cloud-101',
    name: 'Cloud Foundations',
    description: 'Learn the basics of cloud computing and major cloud providers.',
    duration: '6 weeks',
    price: 4999
  },
  {
    id: 'cloud-advanced',
    name: 'Advanced Cloud Computing',
    description: 'Deep dive into AWS, Azure, and GCP services and architectures.',
    duration: '8 weeks',
    price: 7999
  },
  {
    id: 'internship-devops',
    name: 'DevOps Internship',
    description: 'Hands-on DevOps internship experience.',
    duration: '8 weeks',
    price: 0
  },
  {
    id: 'internship-cloud',
    name: 'Cloud Internship',
    description: 'Cloud computing internship with real projects.',
    duration: '8 weeks',
    price: 0
  }
]

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(course => course.id.startsWith(category))
}

export const getCourseById = (id: string) => {
  return courses.find(course => course.id === id)
} 