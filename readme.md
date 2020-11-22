## Outcomes

I want to practise JS OOP

Class creation, using ES6 syntax, arrows etc
JS modules

## NOTES/ideas

- option to select name, weapon, img
  - refactor to pass a player object (Currently passing a player name, and hard coding images to game class)
- add 'setter' for health reduction
- get enemy from API?

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
