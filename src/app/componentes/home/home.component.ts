import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /*------------efec maquina de escribir welcome----------*/
  maquinaEscribir(){
    const escrito = document.getElementById("welcome");
    const texto:string = escrito!.innerHTML;
    escrito!.innerHTML = '';
    const arrayTexto = texto?.split('');
    let contador = 0;
    const intervalo = setInterval(function(){
      escrito!.innerHTML += texto[contador];
      contador++
      if(contador == texto.length){
        clearInterval(intervalo);
      }
    },300)
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
    this.maquinaEscribir();
    
  }

}
