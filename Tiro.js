//Made by Lucas Duez

class Tiro {
  constructor(x,y,direcao) {
    this.posicao = new p5.Vector(x,y); //direção: 1 = para baixo, -1 = para cima
    this.vel = 10*direcao;
  }
  mover(){
    this.posicao.y += this.vel;
  }
  mostrar(){
    rect(this.posicao.x-5,this.posicao.y,5,12);
  }
  destroi_casa(){
    for(var i = 0; i<casas.length; i++){
      if(this.posicao.x >= casas[i].posicao.x && this.posicao.x <= casas[i].posicao.x + 30 &&
         this.posicao.y >= casas[i].posicao.y && this.posicao.y <= casas[i].posicao.y + 15){
           casas[i].vida--;
           this.posicao.y = height+80
      }
    }
  }
  faztudo(){
    this.mover();
    this.destroi_casa();
    this.mostrar();
  }
}
