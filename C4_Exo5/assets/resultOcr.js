class ResultOcr {
  constructor(x, y, word){
    this.x = x;
    this.y = y;
    this.word = word;
  }
  drawWord(){
    text(this.word, this.x, this.y);
  }
}
