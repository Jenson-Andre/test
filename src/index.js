/* eslint-disable no-undef */
/* eslint-disable no-alert */
const name = 'Marcelo';

class App {
  constructor() {
    this.name = 'Marcelo';
    this.run();
  }

  showAlert() {
    alert(`Hello, ${name}`);
  }

  run() {
    this.showAlert();
  }
}

App();
