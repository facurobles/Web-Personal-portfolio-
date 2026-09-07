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
  glitchActive = false;
  skills = [
    'HTML', 'CSS', 'TypeScript', 'ANGULAR', 'React', 'VSC',
    'Java', 'JPA', 'Spring Boot', 'Python', 'Small Talk', 'Net Beans',
    'MySQL', 'JWT', 'GitHub', 'Postman', 'UML', 'POO', 'SCRUM', 'Trello', 'English'
  ];
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
            this.glitchActive = true;
            setTimeout(() => this.glitchActive = false, 900);
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
  arrayElemento: {head: number, tail: string, duration: number, delay: number, left: number, shift: number, skill: string, revealed: boolean}[] = [];
  leftAcumulado: number = 0;

  genRandom(){
    for (let i=0; i<39; i++){
      const head = Math.round(Math.random());
      const skill = this.skills[i % this.skills.length];
      const tail = Array.from({ length: Math.max(0, skill.length - 1) }, () => Math.round(Math.random())).join('');
      const duration = 3 + parseFloat((Math.random() * 3).toFixed(1));
      const delay = -(Math.random() * duration);
      const left = this.leftAcumulado;
      this.arrayElemento.push({head, tail, duration, delay, left, shift: 0, skill, revealed: false});

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
    this.setTheme('theme-red');
  }
  azul(){
    this.setTheme('theme-blue');
  }
  verde(){
    this.setTheme('theme-green');
  }

  private setTheme(theme: string): void {
    document.body.classList.remove('theme-red', 'theme-blue', 'theme-green');
    document.body.classList.add(theme);
    this.color = 'var(--color-font)';
    this.presentacion["--color"] = this.color;
  }

  reactToPointer(event: PointerEvent): void {
    const pointer = (event.clientX / window.innerWidth) * 100;
    this.arrayElemento.forEach(stream => {
      const distance = pointer - stream.left;
      stream.shift = Math.max(-14, Math.min(14, distance * -0.18));
      stream.revealed = Math.abs(distance) < 4.5;
    });
  }

  clearRevealed(): void {
    this.arrayElemento.forEach(stream => {
      stream.revealed = false;
      stream.shift = 0;
    });
  }

  /*stylo*/
  presentacion={"--color":this.color, "--font-size.px":this.tamaño}
  

  ngAfterViewInit(): void {
    this.genRandom();
    this.startBootSequence();
    
  }

}
