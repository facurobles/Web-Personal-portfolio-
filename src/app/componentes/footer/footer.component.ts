import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  arriba(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mostrarBoton: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    if (window.scrollY > 100) {
      this.mostrarBoton = true;
    } else {
      this.mostrarBoton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
