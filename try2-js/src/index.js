import { hi } from "./libTest";
import Phaser from "phaser";

class CuberoomScene extends Phaser.Scene {
  constructor() {
    super();
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
    }
  }

  create() {
    this.map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
    const tileset = this.map.addTilesetImage("background", "background");
    const backgroundTileset = this.map.addTilesetImage(
      "background",
      "background"
    );

    const collisionLayer = this.map.createLayer("collision", tileset, 0, 0);
    const backgroundLayer = this.map.createLayer(
      "background",
      backgroundTileset,
      0,
      0
    );

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
  }
}

function* allCharacterImageNames() {
  const directions = ["down", "up", "left", "right"];
  for (var i = 0; i < directions.length; i++) {
    const direction = directions[i];
    for (var i = 1; i < 5; i++) {
      yield [`player-${direction}-${i}`, `/img/캐릭터01/${direction} (${i}).png`];
    }
  }
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
  scene: [ CuberoomScene ],
};

const game = new Phaser.Game(config);

