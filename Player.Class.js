// Player.Class.js

class Player {
  constructor() {
    this.hitPoints = 3;
    this.inventory = [];
    this.x = 0;
    this.y = 0;
  }

  move(direction) {
    switch (direction) {
      case 'north':
        this.y++;
        break;
      case 'south':
        this.y--;
        break;
      case 'east':
        this.x++;
        break;
      case 'west':
        this.x--;
        break;
    }
  }

  useItem(item) {
    switch (item) {
      case 'healthPotion':
        this.hitPoints += 1;
        this.inventory.splice(this.inventory.indexOf(item), 1);
        break;
      case 'obstacleKey':
        this.inventory.splice(this.inventory.indexOf(item), 1);
        return true;
    }
    return false;
  }
}

