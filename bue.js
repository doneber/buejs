class BueApp {
  constructor(options) {
    this.origen = options.data();
  }
  bText(elemento, target, nameProperty) {
    elemento.innerText = target[nameProperty];
  }
  mount() {
    document.querySelectorAll(`*[b-text]`).forEach((el) => {
      this.bText(el, this.origen, el.getAttribute("b-text"));
    });
  }
}
console.log("hellow");

var Bue = {
  createApp(options) {
    return new BueApp(options);
  }
};
