import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showBootLog = true;
  showWelcome = false;
  showRain = false;
  showActions = false;
  loadingStarted = false;
  loadingComplete = false;
  loadingProgress = 0;

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /*------------secuencia de arranque----------*/
  private startBootSequence(): void {
    this.typeText('bootLine1', '> booting portfolio.exe', 45, () => {
      this.typeText('bootLine2', '> loading creative_mode... ', 45, () => {
        this.loadingStarted = true;
        const progress = setInterval(() => {
          this.loadingProgress += 1;

          if (this.loadingProgress >= 100) {
            clearInterval(progress);
            this.loadingComplete = true;
            this.showBootLog = false;
            this.showRain = true;
            setTimeout(() => {
              this.showWelcome = true;
              setTimeout(() => this.typeHeroText(), 0);
            }, 250);
          }
        }, 20);
      });
    });
  }

  private typeHeroText(): void {
    this.typeText('welcome', 'WELCOME!!!', 120, () => {
      this.typeText('heroName', "I'M FACU ROBLES", 75, () => {
        this.typeText('heroRole', 'FULL STACK DEVELOPER · SYSTEMS ENGINEERING STUDENT', 45, () => {
          this.showActions = true;
        });
      });
    });
  }

  private typeText(elementId: string, text: string, speed: number, onComplete: () => void): void {
    const element = document.getElementById(elementId);
    if (!element) {
      onComplete();
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      element.textContent += text[index];
      index += 1;

      if (index === text.length) {
        clearInterval(interval);
        onComplete();
      }
    }, speed);
  }
  
  /*------------arreglo de binarios------------*/ 
  arrayElemento: {numero: number, duration: number, left: number}[] = [];
  leftAcumulado: number = 0;

  genRandom(){
    for (let i=0; i<39; i++){
      const numero = Math.round(Math.random());
      const duration = 2 + parseFloat((Math.random().toFixed(1)));
      const left = this.leftAcumulado;
      this.arrayElemento.push({numero, duration, left});

      this.leftAcumulado = this.leftAcumulado + 2.5;
    }
  }


    /*----------cambiar tamaño-------------- */
  tamaño:number = 30;

  agrandar(){
    if(this.tamaño<150){
      this.tamaño += 20;
      this.presentacion["--font-size.px"]=this.tamaño;
    }
  }


  reducir(){
    if(this.tamaño>10){
      this.tamaño -= 20;
      this.presentacion["--font-size.px"]=this.tamaño;
    }
  }

    /*cambiar de color */
  color = "rgb(4, 255, 17)";

  rojo(){
    this.color="rgb(252, 0, 0)";
    this.presentacion["--color"]=this.color;
  }
  azul(){
    this.color="rgb(0, 4, 255)";
    this.presentacion["--color"]=this.color;
  }
  verde(){
    this.color="rgb(4, 255, 17)";
    this.presentacion["--color"]=this.color;
  }

  /*stylo*/
  presentacion={"--color":this.color, "--font-size.px":this.tamaño}
  

  ngAfterViewInit(): void {
    this.genRandom();
    this.startBootSequence();
    
  }

}
