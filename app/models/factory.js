import Ground from './cells/ground';
import Wall from './cells/wall';
import Box from './cells/box';
import Target from './cells/target';
import Player from './cells/player';
import Group from './cells/group';
import Board from './board';

export function createWall(row, column) {
  return Wall.create({ row, column });
}

export function createGround(row, column) {
  return Ground.create({ row, column });
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

export function createGroup(row, columns, cells) {
  return Group.create({ row, columns, cells });
}

export function createBoard(rowCount, columnCount) {
  return Board.create({ rowCount, columnCount });
}
