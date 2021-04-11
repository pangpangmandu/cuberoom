import Phaser from "phaser";
import { log } from "./log";
import { playerCreate, playerUpdate } from "./entity/player";

import { allCharacterImageNames } from "./entity/player/image";
import { playerCreateAnimations } from "./entity/player/animation";

function backgroundStatic(scene) {
  scene.add.sprite(1920 / 2, 1088 / 2, "background");
}

function moveWithSpeed2(scene) {
  let moved = false;
  let velocity = 100;

  if (scene.cheat) {
    velocity *= 10;
  }

  if (scene.cursors.left.isDown) {
    if (scene.player.prevMove !== "left") {
      scene.player.phaser.body.setVelocityX(-velocity);
      scene.player.prevMove = "left";
    }
    moved = true;
  } else if (scene.cursors.right.isDown) {
    if (scene.player.prevMove !== "right") {
      scene.player.phaser.body.setVelocityX(velocity);
      scene.player.prevMove = "right";
    }
    moved = true;
  } else {
    scene.player.phaser.body.setVelocityX(0);
  }

  if (scene.cursors.up.isDown) {
    if (scene.player.prevMove !== "up") {
      scene.player.phaser.body.setVelocityY(-velocity);
      scene.player.prevMove = "up";
    }
    moved = true;
  } else if (scene.cursors.down.isDown) {
    if (scene.player.prevMove !== "down") {
      scene.player.phaser.body.setVelocityY(velocity);
      scene.player.prevMove = "down";
    }
    moved = true;
  } else {
    scene.player.phaser.body.setVelocityY(0);
  }

  if (moved === false) {
    scene.player.phaser.body.setVelocity(0);
  }
}

class CuberoomScene extends Phaser.Scene {
  constructor() {
    super();
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.prevAnim = "player-idle";
    this.prevTile = null;
    this.interactionLayer = null;
  }

  preload() {
    this.load.image("background", "/img/미술관내부0216.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.tilemapTiledJSON({
      key: "map",
      url: "/tilemap/tilemap.json",
    });
    for (const [key, file] of allCharacterImageNames()) {
      this.load.image(key, file);
      log("player image load ", [key, file]);
    }
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
    const tileset = this.map.addTilesetImage("collision", "collision-tileset");

    const collisionLayer = this.map.createLayer("collision", tileset, 0, 0);
    collisionLayer.visible = false;
    collisionLayer.alpha = 0;

    const interactiveTileset = this.map.addTilesetImage("interactive-tile");
    const interactionLayer = this.map.createLayer(
      "interaction",
      interactiveTileset,
      0,
      0
    );
    this.interactionLayer = interactionLayer;
    interactionLayer.visible = false;

    this.map.setCollisionByProperty(
      {
        collides: true,
      },
      true,
      true,
      collisionLayer
    );

    this.player = playerCreate(this);
    this.physics.add.collider(this.player.phaser, collisionLayer);

    const backgroundTileset = this.map.addTilesetImage("background");
    this.map.createLayer("overCharacter", backgroundTileset, 0, 0);

    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    this.cameras.main.startFollow(this.player.phaser, true, 0.1, 0.1);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", () => {
      log("Space");
      if (this.cheat === true) {
        this.cheat = false;
      } else {
        this.cheat = true;
      }
    });

    this.input.on("pointerdown", (pointer) => {
      const tile = interactionLayer.getTileAtWorldXY(
        pointer.worldX,
        pointer.worldY
      );
      if (tile == null) {
        return;
      }
      // tile.setInteractive({
      //   useHandCursor: true,
      // });

      log(tile.properties.name);
      if (tile.properties.name === "image1") {
        window.open("https://google.com");
      } else if (tile.properties.name === "image2") {
        window.open("https://naver.com");
      } else if (tile.properties.name === "image3") {
        window.open("https://standlaid.github.io/portfolio/OE/M.html");
      } else if (tile.properties.name === "image4") {
        window.open("https://standlaid.github.io/portfolio/OE/SS.html");
      }
    });
  }

  update(_time, _delta) {
    // moveWithDelta({
    //   player: this.player,
    //   delta,
    //   cursors: this.cursors,
    // });
    //    moveWithSpeed(this);
    moveWithSpeed2(this);

    this.player = playerUpdate(this.player, this.cursors);

    this.updateMousePointer();

    // get player tyle
    // if the the tyle changed
    // do some event
    const playerX = this.player.phaser.x;
    const playerY = this.player.phaser.y;
    const curTile = this.interactionLayer.getTileAtWorldXY(playerX, playerY);
    if (this.prevTile !== curTile) {
      log(curTile);
    }
    this.prevTile = curTile;
  }

  updateMousePointer() {
    const pointer = this.input.mousePointer;
    const tile = this.interactionLayer.getTileAtWorldXY(
      pointer.worldX,
      pointer.worldY
    );

    if (tile == null) {
      this.input.setDefaultCursor("auto");
      return;
    }
    if (tile.properties.name === "image1") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image2") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image3") {
      this.input.setDefaultCursor("pointer");
    } else if (tile.properties.name === "image4") {
      this.input.setDefaultCursor("pointer");
    }
  }
}

const config = {
  type: Phaser.AUTO,
  zoom: 2,
  parent: "phaser-parent",
  width: window.innerWidth / 2,
  height: window.innerHeight / 2,

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
window.game = game;
