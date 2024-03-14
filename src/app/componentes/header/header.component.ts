import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){}

bandera:boolean=true;

changeBandera(){
  this.bandera = !this.bandera;
}

goTo(y:any){
  window.scrollTo(0,screen.height * y)
}

}
