// main base character for player and non-player characters

// - properties
//   - name
//   - health
//   - weapon
// - methods
//   - attack
//   - get attacked (health reduction)

export class Character {
  constructor(name, img, health = 100) {
    this.name = name;
    this.img = img;
    this.health = health;
    this.weapon = this.getWeapon();
  }
  getWeapon() {
    console.log("allocated weapon");
    const weapon = { name: "Sword", dmgMin: 5, dmgMax: 10 };
    return weapon;
  }
}
