import { DOM } from './DOM.js';

class CircleFactory {
  static create(document, color, width, height) {
    return new Circle(document, color, width, height);
  }
}

class Circle extends DOM {
  constructor(document, color, width, height) {
    super(document);
    this.color = color;
    this.width = width + 'px';
    this.height = height + 'px';
    this.circle = this.DOM.createElement('div');
    this.circle.setAttribute('class', 'ball');
  }
  spawnCircle(color, width, height) {
    this.circle.style.backgroundColor = color;
    this.circle.style.width = width + 'px';
    this.circle.style.height = height + 'px';
    this.DOM.body.append(this.circle);
  }
  setClickAction(run) {
    this.circle.addEventListener('click', (event) => {
      let MarginR = parseInt(event.target.style.marginLeft) || 0;
      event.target.style.marginLeft = MarginR + run + 'px';
    });
  }
}

const circle = CircleFactory.create(document, 'blue', 200, 200);
circle.spawnCircle('blue', 200, 200);
circle.setClickAction(100);