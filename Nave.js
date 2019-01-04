//Made by Lucas Duez

class Nave {
  constructor() {
    this.posicao = new p5.Vector(width/2,height - 30);
    this.vel = 5;
    this.tiro = [];
    this.cooldown = 0;
  }
  mover(){
  if(keyIsDown(LEFT_ARROW)){
      this.posicao.x -= this.vel;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.posicao.x += this.vel;
    }
    if(this.posicao.x+10>width){ //não deixa passar da tela
      this.posicao.x = width-10;
    }
    if(this.posicao.x-10<0){ //não deixa passar da tela
      this.posicao.x = 10;
    }
  }

  mostrar(){
    triangle(this.posicao.x,this.posicao.y,this.posicao.x-10,this.posicao.y+25,this.posicao.x+10,this.posicao.y+25);
  }

atira(){
  if(keyIsDown(32) && this.cooldown == 0){ //pode atirar ou não
    append(this.tiro, new Tiro(this.posicao.x+2,this.posicao.y,-1));
    this.cooldown = 15;  // 30 = 1 segundo na vida real
  }
  if(this.cooldown<0){
    this.cooldown = 1;
  }

  for(var i = 0; i<this.tiro.length; i++){
    this.tiro[i].faztudo();
  }
  this.cooldown--;
}

limpar_array(){ //Remove da array os tiros que já sairam da tela
  for(var i = 0; i<this.tiro.length; i++){
    if(this.tiro[i].posicao.y < -10){
      this.tiro = remover(this.tiro, i);
    }
  }
}

morrer(){
  for(var i = 0; i<aliens.length;i++){
    for(var a = 0; a<aliens[i].tiro.length;a++){
      var tiro = aliens[i].tiro[a]
      if(dist(tiro.posicao.x,tiro.posicao.y,this.posicao.x,this.posicao.y) <= 10){
        this.vel *= 0;
        fill(255);
        textSize(50);
        text("Game Over",80,200);
        noLoop();
      }
    }
  }
}
  faztudo(){
    this.morrer();
    this.mover();
    this.atira();
    this.limpar_array();
    this.mostrar();
  }
}


function remover(array,valor){
  var temp = array.indexOf(valor);
  array.splice(valor,1);
  return array
}
