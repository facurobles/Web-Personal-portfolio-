import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeFilter = 'ALL';
  selectedProject: Project | null = null;

  readonly filters = ['ALL', 'JAVA', 'FULL STACK', 'ANGULAR', 'INFRASTRUCTURE'];

  readonly projects: Project[] = [
    {
      id: 'PROJECT_02',
      title: 'Events & Tickets Platform',
      type: 'Professional project',
      role: 'Full Stack Developer',
      status: 'PRIVATE PROJECT',
      description: 'Web application for event management and ticket sales, developed as part of a production-oriented team.',
      contribution: 'Worked across frontend, backend and database layers to implement requirements end to end.',
      technologies: ['Vue', 'Java', 'Spring Boot'],
      filters: ['JAVA', 'FULL STACK'],
      images: [
        'assets/entradaya5.png',
        'assets/entradaya1.png',
        'assets/entradaya2.png',
        'assets/entradaya3.png',
        'assets/entradaya4.png',
      ],
      demoUrl: 'https://dev.entradaya.com.ar/',
    },
    {
      id: 'PROJECT_03',
      title: 'English Level Diagnostic',
      type: 'Professional project',
      role: 'Full Stack Developer',
      status: 'PRIVATE PROJECT',
      description: 'Platform for diagnosing English proficiency, with a management system for administering tests and results.',
      contribution: 'Developed application features with authentication and permissions for the test management workflow.',
      technologies: ['Vue', 'Java', 'Spring Boot', 'Authentication', 'Permissions'],
      filters: ['JAVA', 'FULL STACK'],
      images: [
        'assets/pharo1.png',
        'assets/pharo2.png',
        'assets/pharo3.png',
        'assets/pharo4.png',
        'assets/pharo5.png'
      ],
      demoUrl: 'https://app.pharoenglish.com',
    },
    {
      id: 'PROJECT_09',
      title: 'Ruta del telar',
      type: 'Personal project',
      role: 'Full Stack Developer',
      status: 'Private project',
      description: 'Multi-company system for managing artisans and regional products, stock, sales, settlements, expenses, financial transactions, etc.',
      contribution: 'Designed and developed the complete application, including authentication, role-based access and database operations, deployment and infrastructure.',
      technologies: ['Java', 'Spring Boot', 'DigitalOcean', 'JWT', 'VUE', 'Postgres'],
      filters: ['JAVA', 'FULL STACK', 'VUE'],
      images: [
        'assets/rutadeltelar1.png',
        'assets/rutadeltelar2.png',
        'assets/rutadeltelar3.png',
        'assets/rutadeltelar4.png',
      ],
      demoUrl: 'http://rutadeltelar.araluna.com.ar/',
      featured: true
    },
    {
      id: 'PROJECT_05',
      title: 'Shincal Web App',
      type: 'Team project',
      role: 'Frontend Developer',
      status: 'COMPLETED',
      description: 'Web application for managing and administering an Inka archaeological site in Londres, Catamarca.',
      contribution: 'Designed and developed the frontend of the administration application as part of a team.',
      technologies: ['Angular', 'TypeScript', 'JWT', 'Angular Material', 'Ngx-charts'],
      filters: ['FULL STACK', 'ANGULAR'],
      images: ['assets/shincal1.png', 'assets/shincal2.png', 'assets/shincal3.png', 'assets/shincal4.png'],
      demoUrl: 'https://www.elshincaldequimivil.com.ar/'
    },
    {
      id: 'PROJECT_04',
      title: 'Moodle Production Deployment',
      type: 'Infrastructure project',
      role: 'Infrastructure',
      status: 'COMPLETED',
      description: 'Production deployment of Moodle, an open-source learning platform, for an English academy.',
      contribution: 'Handled the infrastructure and production setup of the platform.',
      technologies: ['Moodle', 'DigitalOcean', 'Production deployment', 'CI/CD'],
      filters: ['INFRASTRUCTURE'],
      images: [
        'assets/pharoAcademy1.png',
        'assets/pharoAcademy2.png',
        'assets/pharoAcademy3.png',
      ],
      demoUrl: 'https://campus.pharoenglish.com',
    },
    {
      id: 'PROJECT_06',
      title: 'Otra Córdoba',
      type: 'Client project',
      role: 'Frontend Developer',
      status: 'IN PROGRESS',
      description: 'Responsive website with custom design for an accounting firm.',
      contribution: 'Designed and developed the Angular frontend and responsive sections.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      filters: ['ANGULAR'],
      images: ['assets/slideOtraCordoba1.png', 'assets/slideOtraCordoba2.png', 'assets/slideOtraCordoba3.png'],
      demoUrl: 'https://otracbatest.web.app'
    },
    {
      id: 'PROJECT_07',
      title: 'Law Firm Landing Page',
      type: 'Client project',
      role: 'Frontend Developer',
      status: 'COMPLETED',
      description: 'Responsive landing page designed and developed for a law firm.',
      contribution: 'Handled the design and development of the complete landing page.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      filters: ['ANGULAR'],
      images: ['assets/ari1.png', 'assets/ari2.png', 'assets/ari3.png'],
      demoUrl: 'https://estudiosaienniblanco.com.ar/'
    },
    {
      id: 'PROJECT_08',
      title: '15th Birthday Web Invitation',
      type: 'Client project',
      role: 'Frontend Developer',
      status: 'COMPLETED',
      description: 'Custom responsive web invitation for a 15th birthday celebration.',
      contribution: 'Designed and developed the interactive invitation experience.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      filters: ['ANGULAR'],
      images: ['assets/invitacion1.png', 'assets/invitacion2.png', 'assets/invitacion3.png', 'assets/invitacion4.png'],
      demoUrl: 'https://mis15s.web.app/'
    },
    {
      id: 'PROJECT_01',
      title: 'Portfolio App Web',
      type: 'Personal project',
      role: 'Full Stack Developer',
      status: 'COMPLETED',
      description: 'Single Page Application with authentication, roles, permissions and CRUD operations connected to a database.',
      contribution: 'Designed and developed the complete application, including authentication, role-based access and database operations.',
      technologies: ['Java', 'Spring Boot', 'JPA', 'JWT', 'Angular', 'MySQL'],
      filters: ['JAVA', 'FULL STACK', 'ANGULAR'],
      images: [
        'assets/slidePortfolio1.png',
        'assets/slidePortfolio2.png',
        'assets/slidePortfolio3.png',
        'assets/slidePortfolio4.png',
        'assets/slidePortfolio5.png'
      ],
      demoUrl: 'https://portfolio-front-robles.web.app',
      featured: true
    },
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'ALL') return this.projects;
    return this.projects.filter(project => project.filters.includes(this.activeFilter));
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  openDetails(project: Project): void {
    this.selectedProject = project;
  }

  closeDetails(): void {
    this.selectedProject = null;
  }
}
