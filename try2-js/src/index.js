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
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
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
    this.createAnimations();
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

    //    this.player = this.physics.add.sprite(50, 600, "player-down-2", 1);
    this.player = this.physics.add.sprite(800, 600, "player-down-2", 1);
    this.physics.add.collider(this.player, collisionLayer);

		const backgroundTileset = this.map.addTilesetImage("background");
		const overCharacterLayer = this.map.createLayer("overCharacter", backgroundTileset, 0, 0);

    this.cameras.main.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels
    );
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on("keydown-SPACE", () => {
      console.log("Space");
      if (this.cheat === true) {
        this.cheat = false;
      } else {
        this.cheat = true;
      }
    });

    this.input.on("pointerdown", (pointer) => {
      //      console.log({ pointer });
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

      //      console.log({tile});
      console.log(tile.properties.name);
      if (tile.properties.name === "image1") {
        window.open("https://google.com");
      } else if (tile.properties.name === "image2") {
        window.open("https://naver.com");
      } else if (tile.properties.name === "image3") {
        window.open("https://standlaid.github.io/portfolio/OE/M.html");
      } else if (tile.properties.name === "image4") {
        window.open("https://standlaid.github.io/portfolio/OE/SS.html");
      }
      //      console.log({ collisionTile: collisionLayer.getTileAtWorldXY(pointer.worldX, pointer.worldY) });
    });
  }

  updateAnimation() {
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
      if (this.prevAnim === "player-up") {
        this.player.anims.play("player-up-stop", true);
      } else if (this.prevAnim === "player-down") {
        this.player.anims.play("player-down-stop", true);
      } else if (this.prevAnim === "player-left") {
        this.player.anims.play("player-left-stop", true);
      } else if (this.prevAnim === "player-right") {
        this.player.anims.play("player-right-stop", true);
      } else {
        this.player.anims.stop();
      }

      this.prevAnim = "player-idle";
    }
  }

  createAnimations() {
    for (const direction of directions) {
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

    for (const direction of directions) {
      this.anims.create({
        key: `player-${direction}-stop`,
        frames: [
          {
            key: `player-${direction}-2`,
          },
        ],
        frameRate: 10,
        repeat: -1,
      });
    }
  }

  update(time, delta) {
    // moveWithDelta({
    //   player: this.player,
    //   delta,
    //   cursors: this.cursors,
    // });
    //    moveWithSpeed(this);
    moveWithSpeed2(this);

    this.updateAnimation();

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

function moveWithSpeed(scene) {
  scene.player.body.setVelocity(0);
  if (scene.cursors.left.isDown) {
    scene.player.body.setVelocityX(-200);
  } else if (scene.cursors.right.isDown) {
    scene.player.body.setVelocityX(200);
  }
  if (scene.cursors.up.isDown) {
    scene.player.body.setVelocityY(-200);
  } else if (scene.cursors.down.isDown) {
    scene.player.body.setVelocityY(200);
  }
}

function moveWithSpeed2(scene) {
  let moved = false;
  let velocity = 100;

  if (scene.cheat) {
    velocity = velocity * 10;
  }

  if (scene.cursors.left.isDown) {
    if (scene.player.playerMove !== "left") {
      scene.player.body.setVelocityX(-velocity);
      scene.player.prevMove = "left";
    }
    moved = true;
  } else if (scene.cursors.right.isDown) {
    if (scene.player.playerMove !== "right") {
      scene.player.body.setVelocityX(velocity);
      scene.player.prevMove = "right";
    }
    moved = true;
  } else {
    scene.player.body.setVelocityX(0);
  }

  if (scene.cursors.up.isDown) {
    if (scene.player.playerMove !== "up") {
      scene.player.body.setVelocityY(-velocity);
      scene.player.prevMove = "up";
    }
    moved = true;
  } else if (scene.cursors.down.isDown) {
    if (scene.player.playerMove !== "down") {
      scene.player.body.setVelocityY(velocity);
      scene.player.prevMove = "down";
    }
    moved = true;
  } else {
    scene.player.body.setVelocityY(0);
  }

  if (moved === false) {
    scene.player.body.setVelocity(0);
  }
}

function moveWithDelta({ player, delta, cursors }) {
  let speed = 0.1;
  if (this.cheat) {
    speed = speed * 100;
  }
  if (cursors.left.isDown) {
    player.x -= speed * delta;
  } else if (cursors.right.isDown) {
    player.x += speed * delta;
  }
  if (cursors.up.isDown) {
    player.y -= speed * delta;
  } else if (cursors.down.isDown) {
    player.y += speed * delta;
  }
}

var config = {
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
