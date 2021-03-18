class Word {
  constructor(w) {
    console.log("created: "+w);
    this.grid = 100;
    this.w = w;
    this.r = PI/4;
    this.posx = round(random(-5, 5))*this.grid;
    this.posy = round(random(-5, 5))*this.grid;
    if(random()<0.5) {
      this.r = -PI/4;
    }
  }
  draw() {
    push();
    translate(this.posx, this.posy, 100);
    rotateX(PI/8);
    rotateY(this.r);
    for(let i=0; i<5; i++) {
    translate(0, 0, -50);
      fill(0+i*20);
      text(this.w, 0, 0);
    }
    pop();
  }
}
