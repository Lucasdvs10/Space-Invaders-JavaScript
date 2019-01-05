//Made by Lucas Duez

var num_aliens = 40;
var aliens = [];

function setup() {
  createCanvas(300,400);
  robber = new Nave();

  for(var i = 0; i<num_aliens; i++){
    aliens[i] = new Alien(2,100);
  }

  var a = 1;
  var h = 0;
  for(var i = 0; i<num_aliens; i++){
    if((a*30) >= width-30){ //18 colunas
      h += 20;
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
      text("Game Over",80,200);
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
