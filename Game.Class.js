// Game.Class.js

class Game {
  constructor() {
    this.player = new Player();
    this.jungle = this.generateJungle();
    this.currentLocation = this.jungle[this.player.x][this.player.y];
  }

  generateJungle() {
    const jungle = [];
    for (let i = 0; i < 10; i++) {
      jungle[i] = [];
      for (let j = 0; j < 10; j++) {
        jungle[i][j] = {
          north: Math.random() < 0.5,
          south: Math.random() < 0.5,
          east: Math.random() < 0.5,
          west: Math.random() < 0.5,
          obstacle: Math.random() < 0.2,
          monster: Math.random() < 0.1,
          treasure: Math.random() < 0.05,
          item: Math.random() < 0.05 ? (Math.random() < 0.5 ? 'healthPotion' : 'obstacleKey') : null
        };
      }
    }
    jungle[0][0].obstacle = false;
    jungle[9][9].treasure = true;
    return jungle;
  }

  describeCurrentLocation() {
    const description = [];
    if (this.currentLocation.monster) {
      description.push('You see a monster!');
    }
    if (this.currentLocation.obstacle) {
      description.push('You see an obstacle.');
    }
    if (this.currentLocation.treasure) {
      description.push('You see treasure!');
    }
    if (this.currentLocation.item) {
      description.push(`You see a ${this.currentLocation.item}.`);
    }
    description.push('Exits:');
    if (this.currentLocation.north) {
      description.push('North');
    }
    if (this.currentLocation.south) {
      description.push('South');
    }
    if (this.currentLocation.east) {
      description.push('East');
    }
    if (this.currentLocation.west) {
      description.push('West');
    }
    return description.join('\n');
  }

  updateGame(direction) {
    if (!this.currentLocation[direction]) {
      return 'You cannot go that way.';
    }
    if (this.currentLocation.obstacle) {
      return 'There is an obstacle in the way.';
    }
    if (this.currentLocation.monster) {
      this.player.hitPoints -= 1;
      return 'You were attacked by a monster!';
    }
    this.player.move(direction);
    this.currentLocation = this.jungle[this.player.x][this.player.y];
    if (this.currentLocation.treasure) {
      return 'Congratulations, you found the treasure! You win!';
    }
    if (this.currentLocation.item) {
      this.player.inventory.push(this.currentLocation.item);
      return `You picked up a ${this.currentLocation.item}.`;
    }
    return this.describeCurrentLocation();
  }

  useItem() {
    if (this.player.inventory.length === 0) {
      return 'You have no items.';
    }
    const item = this.player.inventory[0];
    return this.player.useItem(item) ? 'You used the item.' : 'You cannot use that item here.';
  }
}

