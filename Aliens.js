//Made by Lucas Duez

class Alien {
  constructor(x,y) {
    this.posicao = new p5.Vector(x,y);
    this.vel = new p5.Vector(20,0);
    this.tiro = [];
    this.contador = 30 //controla tudo
    this.contador2 = 30;//auxilia o contador primário
    this.morto = false;
  }
  mover(){
    if(this.contador == 0){ //a cada um segundo ele anda
      if(this.posicao.x > width-15 || this.posicao.x < 2){ //quando bate no lado da tela, anda para baixo e muda o sentido
        this.vel.x *= -1;
        this.vel.y += 20;
      }
      if(this.posicao.x < width-75 && this.posicao.x > 75){ //quando bate no lado da tela, não dá pulo duplo
        this.imprevisivel(); //existe a possibilidade de dar um passo duplo
      }
      this.posicao.add(this.vel);
      atirar(this); //possibilidade de atirar
      this.vel.y = 0;
      this.contador = this.contador2
    }
    this.contador--;
  }
  morre(){
    for(var i = 0; i<robber.tiro.length; i++){
      let tiro = robber.tiro[i];
      if(tiro.posicao.x >= this.posicao.x && tiro.posicao.x <= this.posicao.x+15 &&
      tiro.posicao.y >= this.posicao.y && tiro.posicao.y <= this.posicao.y+10 ){
        this.vel.mult(0);
        robber.tiro = remover(robber.tiro, tiro); //o tiro some se matar o alien
        this.morto = true;
      }
    }
  }

  imprevisivel(){
    var r = random(1);
    var probab = 0.1;
    if(r < probab){
      this.posicao.add(this.vel);
    }
  }

  limpar_array(){ //Remove da array os tiros que já sairam da tela
    for(var i = 0; i<this.tiro.length; i++){
      if(this.tiro[i].posicao.y > height+10){
        this.tiro = remover(this.tiro, i);
      }
    }
  }
  mostrar(){
    rect(this.posicao.x,this.posicao.y,15,10);
  }
  faztudo(){
    alien_morre();
    this.limpar_array();
    this.mover();
    this.morre();
    this.mostrar();
    for(var i = 0; i<this.tiro.length;i++){
      this.tiro[i].faztudo();
    }
  }
}

function alien_morre(){
  for(var i = 0; i<aliens.length; i++){
    if(aliens[i].morto){
      aliens = remover(aliens, i);
    }
  }
}

function atirar(alien){
    var r = random(1);
    var probab = 0.1; //probabildade de atirar
    if(r<probab){
      append(alien.tiro, new Tiro(alien.posicao.x+7.5,alien.posicao.y,1));
  }
}

function dificuldade(){ //quando o número de aliens cai pela metade, aumenta a velocidade de todos eles
  if(aliens.length == floor(num_aliens/2)){
    for(var i = 0; i<aliens.length; i++){
      aliens[i].contador2 = 15;
    }
  }
}
