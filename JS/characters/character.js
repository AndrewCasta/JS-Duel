// main base character for player and non-player characters

// - properties
//   - name
//   - health
//   - weapon
// - methods
//   - get weapon
//   - health reduction - getter/setter

import { weapons } from "../weapons.js";
import { getRandomIndex } from "../utils.js";

export class Character {
  constructor(name, img, health = 100) {
    this.name = name;
    this.img = img;
    this._health = health;
    this.weapon = this.getWeapon();
  }
  getWeapon() {
    return weapons[getRandomIndex(weapons)];
  }
  get health() {
    return this._health;
  }
  set health(value) {
    this._health = value;
  }
}
