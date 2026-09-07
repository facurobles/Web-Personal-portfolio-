import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  enlargedImage: string | null = null;

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
    this.syncEnlargedImage();
  }

  nextSlide(): void {
    const total = this.projectImages.length;
    this.currentSlide = total ? (this.currentSlide + 1) % total : 0;
    this.syncEnlargedImage();
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
    this.syncEnlargedImage();
  }

  private syncEnlargedImage(): void {
    if (this.enlargedImage && this.projectImages.length) {
      this.enlargedImage = this.projectImages[this.currentSlide];
    }
  }

  openImage(image: string): void {
    this.enlargedImage = image;
  }

  closeImage(): void {
    this.enlargedImage = null;
  }

  @HostListener('window:keydown', ['$event'])
  handleLightboxKey(event: KeyboardEvent): void {
    if (!this.enlargedImage) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previousSlide();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextSlide();
    } else if (event.key === 'Escape') {
      this.closeImage();
    }
  }
}
