export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  status: string;
  description: string;
  contribution: string;
  technologies: string[];
  filters: string[];
  image?: string;
  images?: string[];
  demoUrl?: string;
  featured?: boolean;
}
