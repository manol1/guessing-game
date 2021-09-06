class GuessingGame {
  constructor() {
    this.left = null;
    this.right = null;
    this.result = null;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    this.result = Math.round((this.left + this.right) / 2);
    return this.result;
  }
  
  lower() {
    this.right = this.result;
  }
    
  greater() {
    this.left = this.result;
  }
}

module.exports = GuessingGame;
