import { log } from "../log";

export function playerOnMapCreate() {
  return {
    prevTile: null,
    prevTileName: null,
  };
}

/**
 * 플레이어가 위치한 타일에 따라 특정 동작을 함
 */
export function playerOnMapUpdate(playerOnMap, player, map) {
  const playerX = player.phaser.x;
  const playerY = player.phaser.y;
  const curTile = map.interactionLayer.getTileAtWorldXY(playerX, playerY);
  const curTileName = curTile?.properties?.name;
  if (playerOnMap.prevTileName !== curTileName) {
    log(curTileName);
  }
  return {
    ...playerOnMap,
    prevTile: curTile,
    prevTileName: curTile?.properties?.name,
  };
}
