import Arrow from './cells/arrow';
import Box from './cells/box';
import Ground from './cells/ground';
import Group from './cells/group';
import Player from './cells/player';
import Target from './cells/target';
import Wall from './cells/wall';
import Water from './cells/water';
import Void from './cells/void';

import Board from './board';

export function createWall(row, column) {
  return Wall.create({ row, column });
}

export function createGround(row, column) {
  return Ground.create({ row, column });
}

export function createWater(row, column) {
  return Water.create({ row, column });
}

export function createBox(row, column) {
  return Box.create({ row, column });
}

export function createTarget(row, column) {
  return Target.create({ row, column });
}

export function createPlayer(row, column) {
  return Player.create({ row, column });
}

export function createGroup(row, column, cells) {
  return Group.create({ row, column, cells });
}

export function createArrow(row, column, direction) {
  return Arrow.create({ row, column, direction });
}

export function createVoid(row, column) {
  return Void.create({ row, column });
}

export function createBoard(rowCount, columnCount) {
  return Board.create({ rowCount, columnCount });
}
