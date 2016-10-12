import Cell from './cell';

export default Cell.extend({
  kind: ['arrow'],
  direction: 'left',

  canBeOccupiedBy(other) {
    if (!other.get('isBox')) {
      return true;
    }

    let can = false;

    switch(this.get('direction')) {
      case 'left':
        can = this.get('column') + 1 === other.get('column');
      break;
      case 'right':
        can = this.get('column') - 1 === other.get('column');
      break;
      case 'up':
        can = this.get('row') + 1 === other.get('row');
      break;
      case 'down':
        can = this.get('row') - 1 === other.get('row');
      break;
    }

    return can;
  }
});
