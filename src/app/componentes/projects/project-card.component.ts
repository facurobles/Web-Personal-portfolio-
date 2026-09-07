import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnChanges {
  @Input() project!: Project;
  @Output() details = new EventEmitter<Project>();

  currentSlide = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.currentSlide = 0;
    }
  }

  get projectImages(): string[] {
    return this.project.images?.length ? this.project.images : (this.project.image ? [this.project.image] : []);
  }

  previousSlide(): void {
    const total = this.projectImages.length;
    this.currentSlide = total ? (this.currentSlide - 1 + total) % total : 0;
  }

  nextSlide(): void {
    const total = this.projectImages.length;
    this.currentSlide = total ? (this.currentSlide + 1) % total : 0;
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
  }
}
