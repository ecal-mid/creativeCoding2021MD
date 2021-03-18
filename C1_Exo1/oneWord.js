class OneWord {
  constructor(receivedWord) {
    this.word = receivedWord;
    this.qtt = 1;
  }
  getWidth() {
    return textWidth(this.word)+this.qtt*20;
  }
  draw(receivedX, receivedY) {
    noStroke();
    fill(255, 0, 0);
    rect(receivedX, receivedY, this.getWidth(), 24);
    fill(0);
    text(this.word, receivedX, receivedY);
  }
}
