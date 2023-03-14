export default class Team {
  constructor(...args) {
    this.characters = [...args];
  }

  [Symbol.iterator]() {
    const { characters } = this;
    let current = 0;
    const max = this.characters.length;
    return {
      next() {
        return current < max ? { value: characters[current++], done: false } : { done: true };
      },
    };
  }
}
