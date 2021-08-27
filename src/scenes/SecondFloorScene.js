import Phaser from "phaser";
import { log } from "../log";
import { playerCreate, playerUpdate , playerMouseUpdate } from "../entity/player";
import { allCharacterImageNames } from "../entity/player/image";
import { playerCreateAnimations } from "../entity/player/animation";
import { mapCreate, mapCreateOverCharacterLayer } from "../entity/map";
import {
  mapOnPointerDown,
  mapUpdateMousePoint,
} from "../entity/map/interaction";
import { playerOnMapCreate, playerOnMapUpdate } from "../relation/playerOnMap";

function backgroundStatic(scene) {
  scene.add.sprite(800 / 2, 608 / 2, "secondFloor-background");
}

class SecondFloorScene extends Phaser.Scene {
  constructor() {
    super('SecondFloorScene');
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.playerOnMap = null;
    this.x = 16 * 6;
    this.y = 16 * 11;
  }

  init(data) {
    if (data.x) this.x = data.x;
    if (data.y) this.y = data.y;
  }

  preload() {
    this.load.image("secondFloor-background", "/img/2f_background.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.image("popup", "/img/ui-map/popup.png");
    this.load.tilemapTiledJSON({
      key: "secondFloor-map",
      url: "/tilemap/second-floor.json",
    });
    for (const [key, file] of allCharacterImageNames()) {
      this.load.image(key, file);
      log("player image load ", [key, file]);
    }
    this.load.image('el-panel-2F', '/img/ui-map/el_panel_2F.png');
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = mapCreate(this, 'secondFloor-map');
    this.player = playerCreate(this, this.x, this.y);
    this.playerOnMap = playerOnMapCreate();
    this.physics.add.collider(this.player.phaser, this.map.collisionLayer);

    this.map = mapCreateOverCharacterLayer(this.map, 'secondFloor-background');

    this.cameras.main.setBounds(
      0,
      0,
      this.map.phaser.widthInPixels,
      this.map.phaser.heightInPixels
    );
    this.cameras.main.startFollow(this.player.phaser, true, 0.1, 0.1);
    this.cameras.main.fadeIn(500);

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
  }

  update(_time, _delta) {
    var pointer = this.input.activePointer;
    if(pointer.isDown){
      this.player = playerMouseUpdate(this.player,this.input.activePointer, this);
      mapUpdateMousePoint(this.map, this);
      this.playerOnMap = playerOnMapUpdate(
        this.playerOnMap,
        this.player,
        this.map,
        this
      );
    }else{
      this.player = playerUpdate(this.player,this.cursors, this);
      mapUpdateMousePoint(this.map, this);
      this.playerOnMap = playerOnMapUpdate(
        this.playerOnMap,
        this.player,
        this.map,
        this
      );
    }
  }
}

export default SecondFloorScene;
