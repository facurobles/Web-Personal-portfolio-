import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio_new';

  bandera:boolean=true;
  
  changeBandera(){
    this.bandera = !this.bandera;
  }
/*---------------scrollear-------------*/
  constructor(private elementRef: ElementRef) { }

  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
