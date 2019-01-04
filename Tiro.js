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
  faztudo(){
    this.mover();
    this.mostrar();
  }
}
