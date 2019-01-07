class Casa {
  constructor(x,y) {
    this.posicao = new p5.Vector(x,y);
    this.vida = 10;
    this.morto = false;
  }
  mostrar(){
    var g = 255; //verde
    var r = 0

    if(this.vida < 6){ //amarelo
      g = 255;
      r = 165;
    }

    if(this.vida < 3){ //vermelho
      g = 0;
      r = 255;
    }

    fill(r,g,0);
  rect(this.posicao.x,this.posicao.y,30,15);
  }
  morre(){
    if(this.vida <= 0){
      this.morto = true;
    }
  }
  faztudo(){
    this.morre()
    sumir();
    this.mostrar();
  }
}

function sumir(){
  for(var i = 0; i<casas.length; i++){
    if(casas[i].morto){
      casas = remover(casas, i)
    }
  }
}
