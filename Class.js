class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

//커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);
//물 추가
coffeeMachine.setWaterAmount(-10); //error
coffeeMachine.setWaterAmount(20);
console.log(coffeeMachine.getWaterAmount());
