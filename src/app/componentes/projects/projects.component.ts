import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  banderaDetalle=false;

  goToDetalle(){
    this.banderaDetalle = !this.banderaDetalle;
  }

}
