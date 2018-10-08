export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.time = 10000;
  }

  setHunger() {
    let timer = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel === 0) {
        clearInterval(timer);
      }
    }, 1000);

  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      this.gameOver();
      return true;
    }

  }

  feed() {
    this.foodLevel = 10;
  }

  gameOver() {
    this.didYouGetEaten = true;
    this.foodlevel = 0;

  }
}
