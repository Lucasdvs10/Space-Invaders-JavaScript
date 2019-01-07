//Made by Lucas Duez

var num_aliens = 40;
var aliens = [];
var casas = [];

function setup() {
  createCanvas(300,400);
  robber = new Nave();

  for(var i = 0; i<num_aliens; i++){
    aliens[i] = new Alien(2,100);
  }

  casas[0] = new Casa(width - 270,height - 70);
  casas[1] = new Casa(width - 170,height - 70);
  casas[2] = new Casa(width - 70,height - 70);

  var a = 1;
  var h = 0;
  for(var i = 0; i<num_aliens; i++){
    if((a*30) >= width-30){ //18 colunas
      h += 25;
      a = 1;
    }
    aliens[i].posicao.y += h;
    if((aliens[i].posicao.y /10) % 2 != 0){
      aliens[i].vel.x *= -1;
    }
    aliens[i].posicao.x = a*30;
    a++;
  }
}

function draw() {
  frameRate(30)
  background(55);
  robber.faztudo();

  for(var i = 0; i<casas.length; i++){
    casas[i].faztudo();
  }

  for(var i = 0; i<aliens.length; i++){
    aliens[i].faztudo();
  }

  dificuldade();
  game_over();
  vitoria();
}

function game_over(){
  for(var i =  0; i<aliens.length; i++){
    if(aliens[i].posicao.y >= height - 40){
      fill(255);
      textSize(50);
      text("Game Over",10,200);
      noLoop();
    }
  }
}

function vitoria(){
  if(aliens.length == 0){
    robber.vel *= 0;
    fill(255);
    textSize(50);
    text("Vitória!",80,200);
  }
}

function remover(array,valor){
  var temp = array.indexOf(valor);
  array.splice(valor,1);
  return array
}
