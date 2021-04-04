import { hi } from "./libTest";
import Phaser from "phaser";

const directions = ["down", "up", "left", "right"];

class CuberoomScene extends Phaser.Scene {
  constructor() {
    super();
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.prevAnim = "player-idle";
  }

  preload() {
    this.load.image("background", "/img/미술관내부0216.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.tilemapTiledJSON({
      key: "map",
      url: "/tilemap/tilemap.json",
    });
    for (const [key, file] of allCharacterImageNames()) {
      this.load.image(key, file);
      console.log("player image load ", [key, file]);
    }
  }

  create() {
    for (var i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const animConfig = {
        key: `player-${direction}`,
        frames: [...animationFrames(direction)],
        frameRate: 10,
        repeat: -1,
      };
      this.anims.create(animConfig);
      console.log(animConfig);
      console.log([...animationFrames(direction)]);
    }

		backgroundStatic(this);

    this.map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
    const tileset = this.map.addTilesetImage("collision", "collision-tileset");

    const collisionLayer = this.map.createLayer("collision", tileset, 0, 0);
    collisionLayer.visible = false;
    collisionLayer.alpha = 0;

    this.map.setCollisionByProperty(
      {
        collides: true,
      },
      true,
      true,
      collisionLayer
    );

    this.player = this.physics.add.sprite(50, 600, "player-down-1", 1);
    this.physics.add.collider(this.player, collisionLayer);

    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    this.cameras.main.startFollow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
    }
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
    }

    if (this.cursors.left.isDown) {
      if (this.prevAnim !== "player-left") {
        this.player.anims.play("player-left", true);
        this.prevAnim = "player-left";
      }
    } else if (this.cursors.right.isDown) {
      if (this.prevAnim !== "player-right") {
        this.player.anims.play("player-right", true);
        this.prevAnim = "player-right";
      }
    } else if (this.cursors.up.isDown) {
      if (this.prevAnim !== "player-up") {
        this.player.anims.play("player-up", true);
        this.prevAnim = "player-up";
      }
    } else if (this.cursors.down.isDown) {
      if (this.prevAnim !== "player-down") {
        this.player.anims.play("player-down", true);
        this.prevAnim = "player-down";
      }
    } else {
      this.player.anims.stop();
      this.prevAnim = "player-idle";
    }
  }
}

function* allCharacterImageNames() {
  for (const direction of directions) {
    for (var i = 1; i < 5; i++) {
      yield [
        `player-${direction}-${i}`,
        `/img/캐릭터01/${direction} (${i}).png`,
      ];
    }
  }
}

function* animationFrames(direction) {
  for (let i = 1; i < 5; i++) {
    yield { key: `player-${direction}-${i}` };
  }
}

function backgroundStatic(scene) {
  scene.add.sprite(1920 / 2, 1088 / 2, "background");
}

function backgroundTile(scene) {
  const backgroundTileset = this.map.addTilesetImage(
    "background",
    "background"
  );

  const backgroundLayer = this.map.createLayer(
    "background",
    backgroundTileset,
    0,
    0
  );
}

var config = {
  type: Phaser.AUTO,
  parent: "phaser-parent",
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [CuberoomScene],
};

const game = new Phaser.Game(config);
