import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

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
  constructor(private elementRef: ElementRef, private router: Router) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigation?.type === 'reload';

    if (isReload) {
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => {
          if (this.router.url !== '/noOptions') {
            this.router.navigateByUrl('/noOptions', { replaceUrl: true });
          }
        });
    }
  }

  scrollToElement(elementId: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
