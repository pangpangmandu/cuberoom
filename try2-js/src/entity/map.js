/* eslint-disable import/prefer-default-export */

export function mapCreate(scene) {
  const phaser = scene.make.tilemap({
    key: "map",
    tileWidth: 16,
    tileHeight: 16,
  });
  const tileset = phaser.addTilesetImage("collision", "collision-tileset");

  const collisionLayer = phaser.createLayer("collision", tileset, 0, 0);
  collisionLayer.visible = false;
  collisionLayer.alpha = 0;

  const interactiveTileset = phaser.addTilesetImage("interactive-tile");
  const interactionLayer = phaser.createLayer(
    "interaction",
    interactiveTileset,
    0,
    0
  );
  interactionLayer.visible = false;

  phaser.setCollisionByProperty(
    {
      collides: true,
    },
    true,
    true,
    collisionLayer
  );

  return {
    phaser,
    tileset,
    collisionLayer,
    interactiveTileset,
    interactionLayer,
    backgroundTileset: null,
  };
}

/**
 * 플레이어 생성 이후에 호출해야 플레이어 위에 그려진다.
 */
export function mapCreateOverCharacterLayer(map) {
  const backgroundTileset = map.phaser.addTilesetImage("background");
  map.phaser.createLayer("overCharacter", backgroundTileset, 0, 0);
  return {
    ...map,
    backgroundTileset,
  };
}
