import { keyframes } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  name : string = ""


  /*desactiva el input al press inter y activa las lineas siguientes*/
  func1 (){
    document.getElementById("name")!.style.display="none";   
    document.getElementById("nameButton")!.style.display="none";   
    document.getElementById("wname")!.style.display="none";   
    this.imprimirAllOptions();
  }



  /*utilizacion de promesa/async/await para esperar que una funcion se termine de ejec p ejec otra*/
  imprimirOption(id:string){
    return new Promise<void>((resolve) => {
      setTimeout(()=>{
        document.getElementById(id)!.style.display = "inline";
        this.maquinaEscribir(id);
        resolve();
      },800);
    });
  }


  /*funcion que espera que termine la impresion de un opcion para seguir con la otra*/
  /*primero espera 3s para llamar a la funcion completa*/
  async imprimirAllOptions(){
      await this.imprimirOption("hello");
      await this.imprimirOption("myname");
      await this.imprimirOption("choose");
      await this.imprimirOption("option1");
      await this.imprimirOption("option2");
      this.imprimirOption("option3")
    }
  

  /*efecto maquina de escribir usando js*/
  maquinaEscribir(id:string){
    const escrito = document.getElementById(id);
    const texto = escrito!.innerHTML ;
    escrito!.innerHTML = "";
    const arrayCaracteres = texto.split('');
    var contador = 0;
    const intervalo = setInterval(function(){
      escrito!.innerHTML += texto[contador];
      
      contador++;
      if(contador == texto.length){
        clearInterval(intervalo);
        escrito!.style.border = "none";
      }  
    }, 40);
  }
    


}
