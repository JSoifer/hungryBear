export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
    if (this.foodLevel === 0) {
      clearInterval();
    }
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
    // clearInterval();

  }
}
