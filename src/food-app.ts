class Score { }

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
  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}

const foods = new Foods();