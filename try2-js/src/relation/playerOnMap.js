export function playerOnMapCreate() {
  return {
    prevTile: null,
  };
}

export function playerOnMapUpdate(playerOnMap, player, map) {
  const playerX = player.phaser.x;
  const playerY = player.phaser.y;
  const curTile = map.interactionLayer.getTileAtWorldXY(playerX, playerY);
  if (playerOnMap.prevTile !== curTile) {
    log(curTile);
  }
  playerOnMap.prevTile = curTile;
}
