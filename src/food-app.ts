class Score {
  get totalScore() {
    const foods = new Foods();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler.bind(this)); // clickEventHandler内のthisは、constructor内で使用されているthisと同じだ、と明示的にしている
  }
  clickEventHandler() {
    console.log(this)
    this.element.classList.toggle('food--active');
  }
}

class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  private _activeElements: HTMLDivElement[] = []; // active(food--active)になった要素が入る
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      console.log(foodScore)
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }
  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}

const foods = new Foods();