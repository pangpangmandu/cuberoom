import Phaser from "phaser";
import { log } from "../log";
import { playerCreate, playerUpdate } from "../entity/player";
import { allCharacterImageNames } from "../entity/player/image";
import { playerCreateAnimations } from "../entity/player/animation";
import { mapCreate, mapCreateOverCharacterLayer } from "../entity/map";
import {
  mapOnPointerDown,
  mapUpdateMousePoint,
} from "../entity/map/interaction";
import { playerOnMapCreate, playerOnMapUpdate } from "../relation/playerOnMap";

function backgroundStatic(scene) {
  scene.add.sprite(1200 / 2, 800 / 2, "entrance-background");
}

class EntranceScene extends Phaser.Scene {
  constructor() {
    super('EntranceScene');
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.playerOnMap = null;
    this.popups = [];
  }

  preload() {
    this.load.image("entrance-background", "/img/entrance_background.jpg");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.image("popup", "/img/ui-map/popup.png");
    this.load.tilemapTiledJSON({
      key: "entrance-map",
      url: "/tilemap/entrance.json",
    });
    for (const [key, file] of allCharacterImageNames()) {
      this.load.image(key, file);
      log("player image load ", [key, file]);
    }
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = mapCreate(this, 'entrance-map');
    this.player = playerCreate(this, 100, 540);
    this.playerOnMap = playerOnMapCreate();
    this.physics.add.collider(this.player.phaser, this.map.collisionLayer);

    this.map = mapCreateOverCharacterLayer(this.map, 'entrance-background');

    this.cameras.main.setBounds(
      0,
      0,
      this.map.phaser.widthInPixels,
      this.map.phaser.heightInPixels
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

    this.input.on("pointerdown", (pointer) =>
      mapOnPointerDown(this.map, pointer)
    );

    this.to1F = this.add.text(20, 670, '(temp) To 1F', {
      font: '15px Arial',
      fill: 'red',
    }).setInteractive({ cursor: 'pointer' });
		this.toB1 = this.add.text(20, 700, '(temp) To B1', {
      font: '15px Arial',
      fill: 'blue',
    }).setInteractive({ cursor: 'pointer' });

    this.to1F.on('pointerdown', function(e) {
      this.scene.start('FirstFloorScene');
    }, this);
    this.toB1.on('pointerdown', function(e) { console.log(this)
      this.scene.start('FirstBasementScene');
    }, this);
  }

  update(_time, _delta) {
    this.player = playerUpdate(this.player, this.cursors, this);
    mapUpdateMousePoint(this.map, this);
    this.playerOnMap = playerOnMapUpdate(
      this.playerOnMap,
      this.player,
      this.map,
      this
    );
  }
}

export default EntranceScene;
