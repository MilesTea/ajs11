export default class Team {
  constructor(...args) {
    this.characters = [...args];
  }

  * [Symbol.iterator]() {
    const max = this.characters.length;
    for (let i = 0; i < max; i++) {
      yield this.characters[i];
    }
  }
}
