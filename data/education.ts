export interface EducationItem {
  id: string
  institution: string
  degree: string
  duration: string
  location: string
  description?: string[]
}

export const education: EducationItem[] = [
  {
    id: '1',
    institution: 'New York University (NYU)',
    degree: 'MS in Computer Science',
    duration: 'Graduation: Dec 2025',
    location: 'New York, NY, USA',
  },
  {
    id: '2',
    institution: 'Vellore Institute of Technology (VIT)',
    degree: 'BTech in Computer Science',
    duration: '',
    location: 'Vellore, India',
  },
]

