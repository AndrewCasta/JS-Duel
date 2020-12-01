# DEMO:

https://feintrabbit.github.io/JS-Duel/

## Outcomes

I want to practise JS OOP & Async

Class creation, using ES6 syntax, arrows etc
JS modules
Async JS (ajax & data handling)

## TODO

- Different background options

### Done

- name input at start
- function for swapping game-bar
- Attack animation
- Disable attack button until attack is finished
- get/set HP
- Weapon data (API)
- weapon random selection
- Animate/flash damage

## NOTES/ideas

game concepts

- animation/visuals for attack and death
- option to select name, weapon, img
  - refactor to pass a player object (Currently passing a player name, and hard coding images to game class)
- multiple enemies in a row?

techical

- add 'setter' for health reduction
- get enemy/image from API?

## Design

Starts empty
Press button to start game
HTML created/update
Play rounds

Weapons - array of objects

Game

- properties
  - player
  - enemies
- methods
  - start game
    - assign random weapon & enemy
  - game round
    - player attack enemy (rand num in weapon attk range)
    - enemy attack player (rand num in weapon attk range)
  - check for win, declare winner or loop again

Player

- properties
  - name
  - health
  - weapon
  - equipment
- methods
  - attack
  - get attacked (health reduction)

Enemies

- properties
  - name
  - health
  - weapon
  - equipment
- methods
  - attack
  - get attacked (health reduction)

Weapons

- properties
  - damage (range)
