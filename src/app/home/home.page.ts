import { Component } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  digito1 = "";
  digito2 = "";
  resultado = "";
  imagem = "";



  constructor() {}
  
  digitar(botao:string){
    if(botao === "corrige"){
      this.resultado = ""
      this.digito1 = ""
      this.digito2 = ""
      this.imagem = ""
    } else if(botao === "branco"){
      this.resultado = "EM BRANCO"
      this.imagem = ""
    } else if(botao === "confirma"){
      this.resultado = "FIM";
      this.imagem = ""
    } else {
      if(this.digito1 === ""){
        this.digito1 = botao;
      } else if(this.digito1 !== "" && this.digito2 === ""){
        this.digito2 = botao; 
        if(this.digito1 === "1" && this.digito2 === "0"){
          this.resultado = "Neymar Jr"
          this.imagem = "https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"
        } else if(this.digito1 === "1" && this.digito2 === "8"){
          this.resultado = "Vinicius Jr"
          this.imagem ="https://placar.abril.com.br/wp-content/uploads/2022/10/000_32KL2TL.jpg"
        } else{
          this.resultado = "Nulo"
          this.imagem = ""
        }
      } 
    }

  }

}
