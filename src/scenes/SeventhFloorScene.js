import Phaser from "phaser";
import { playerCreate, playerUpdate, playerFollowClickUpdate } from "../entity/player";
import { allCharacterImageNames } from "../entity/player/image";
import { playerCreateAnimations } from "../entity/player/animation";
import { mapCreate, mapCreateOverCharacterLayer } from "../entity/map";
import {
  mapOnPointerDown,
  mapUpdateMousePoint,
} from "../entity/map/interaction";
import { playerOnMapCreate, playerOnMapUpdate } from "../relation/playerOnMap";

function backgroundStatic(scene) {
  scene.add.sprite(800 / 2, 608 / 2, "seventhFloor-background");
}

class SeventhFloorScene extends Phaser.Scene {
  constructor() {
    super('SeventhFloorScene');
    this.map = null;
    this.player = null;
    this.cursors = null;
    this.playerOnMap = null;
    this.x = 16 * 5;
    this.y = 16 * 32;

    this.socket = window.socket;
    this.players = {};

    this.socket.on('removePlayer', (data) => {
      if (this.players[data.id]) {
        this.players[data.id].phaser.destroy(true);
        this.players[data.id].nameLabel.destroy(true);
        this.players[data.id].chatBubble.destroy(true);
        delete this.players[data.id];
      }
    });

    this.socket.on('playerList', (data) => {
      for (const [id, player] of Object.entries(data)) {
        if (player.floor !== '7F') return;

        const directions = ['left', 'right', 'up', 'down'];
        for (const direction of directions) {
          for (let i = 1; i < 5; i += 1) {
            // if (!this.textures.exists(`${player.id}-${direction}-${i}`)) this.load.image(`${player.id}-${direction}-${i}`, `http://127.0.0.1:3000/static${player.imgUrl}${direction}-${i}.png`);
            // if (!this.textures.exists(`${player.id}-${direction}-${i}`)) this.load.image(`${player.id}-${direction}-${i}`, `http://localhost:3000/static${player.imgUrl}${direction}-${i}.png`);
            if (!this.textures.exists(`${player.id}-${direction}-${i}`)) this.load.image(`${player.id}-${direction}-${i}`, `http://cuberoom.net/${player.imgUrl}${direction}-${i}.png`);
          }
        }
        this.load.once('complete', () => {
          // if (!this.players[id]) this.players[id] = playerCreate(this, player.x, player.y, player.name, player.chat, player.id);
          if (!this.players[id]) {
          this.players[id] = playerCreate(this, player.x, player.y, player.name, player.chat, player.id);
        } else {
          // if (player.floor === 'entrance' && this.socket.id !== id) {
          if (this.socket.id !== id) {
            this.players[id].phaser.x = player.x;
            this.players[id].phaser.y = player.y;
            this.players[id].nameLabel.x = player.x;
            this.players[id].nameLabel.y = player.y - 30;
            this.players[id].chatBubble.x = player.x;
            this.players[id].chatBubble.y = player.y - 45;
            // this.players[id].phaser.anims.play(`player-${player.direction}`, true);
            // this.players[id].phaser.anims.play(`player-${player.direction}-stop`, true);
            this.players[id].phaser.setTexture(`${player.id}-${player.direction}-${2}`);
          }
        }
        }, this);
        this.load.start();

        // if (!this.players[id]) {
        //   this.players[id] = playerCreate(this, player.x, player.y, player.name, player.chat, player.id);
        // } else {
        //   // if (player.floor === 'entrance' && this.socket.id !== id) {
        //   if (this.socket.id !== id) {
        //     this.players[id].phaser.x = player.x;
        //     this.players[id].phaser.y = player.y;
        //     this.players[id].nameLabel.x = player.x;
        //     this.players[id].nameLabel.y = player.y - 30;
        //     this.players[id].chatBubble.x = player.x;
        //     this.players[id].chatBubble.y = player.y - 45;
        //     // this.players[id].phaser.anims.play(`player-${player.direction}`, true);
        //     // this.players[id].phaser.anims.play(`player-${player.direction}-stop`, true);
        //     this.players[id].phaser.setTexture(`${player.id}-${player.direction}-${2}`);
        //   }
        // }
      }
    });

    this.socket.on('addChat', (data) => {
      if (data.floor === '7F' && this.players[data.id]) this.players[data.id].chatBubble.setText(data.chat);
    });

    this.socket.on('removeChat', (data) => {
      if (data.floor === '7F' && this.players[data.id]) this.players[data.id].chatBubble.setText('');
    });
  }

  init(data) {
    if (data.x) this.x = data.x, this.destinationX = data.x;
    if (data.y) this.y = data.y, this.destinationY = data.y;

  }

  preload() {
    this.load.image("seventhFloor-background", "/img/7f_background.png");
    this.load.image("collision-tileset", "/tilemap/simple_tile.png");
    this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
    this.load.image("popup", "/img/ui-map/popup.png");
    this.load.tilemapTiledJSON({
      key: "seventhFloor-map",
      url: "/tilemap/seventh-floor.json",
    });
    for (const [key, file] of allCharacterImageNames(window.playerImgUrl)) {
      this.load.image(key, file);
    }
  }

  create() {
    playerCreateAnimations(this);
    backgroundStatic(this);

    this.map = mapCreate(this, 'seventhFloor-map');

    for (const [id, player] of Object.entries(this.players)) {
      this.players[id] = playerCreate(this, player.phaser.x, player.phaser.y, player.nameLabel._text, player.chatBubble._text, player.id);
    }

    this.player = playerCreate(this, this.x, this.y);
    this.players[this.socket.id] = this.player;

    this.socket.emit('addPlayer', {
      id: this.socket.id,
      name: window.playerName,
      imgUrl: window.playerImgUrl,
      floor: '7F',
      x: this.x,
      y: this.y,
    });

    this.playerOnMap = playerOnMapCreate();
    this.physics.add.collider(this.player.phaser, this.map.collisionLayer);
    this.physics.add.collider(this.player.nameLabel, this.map.collisionLayer);
    this.physics.add.collider(this.player.chatBubble, this.map.collisionLayer);

    this.map = mapCreateOverCharacterLayer(this.map, 'seventhFloor-background');

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
    // const pointer = this.input.activePointer;
    // if(pointer.isDown){
    //   this.player = playerMouseUpdate(this.player,this.input.activePointer, this);
    //   mapUpdateMousePoint(this.map, this);
    //   this.playerOnMap = playerOnMapUpdate(
    //     this.playerOnMap,
    //     this.player,
    //     this.map,
    //     this
    //   );
    // }else{
    //   this.player = playerUpdate(this.player,this.cursors, this);
    //   mapUpdateMousePoint(this.map, this);
    //   this.playerOnMap = playerOnMapUpdate(
    //     this.playerOnMap,
    //     this.player,
    //     this.map,
    //     this
    //   );
    // }

    const pointer = this.input.activePointer;
    this.player = playerFollowClickUpdate(this.player, this.destinationX, this.destinationY, this);
    mapUpdateMousePoint(this.map, this);
    this.playerOnMap = playerOnMapUpdate(
      this.playerOnMap,
      this.player,
      this.map,
      this
    );



    if(pointer.isDown){
      this.destinationX = this.input.activePointer.worldX;
      this.destinationY = this.input.activePointer.worldY;

    }

    // console.log("x: "+this.destinationX+" y: "+this.destinationY);


    this.player.nameLabel.x = this.player.phaser.x;
    this.player.chatBubble.x = this.player.phaser.x;
    this.player.nameLabel.y = this.player.phaser.y - 30;
    this.player.chatBubble.y = this.player.phaser.y - 45;

    this.socket.emit('movePlayer', {
      id: this.socket.id,
      floor: '7F',
      direction: this.player.prevMove,
      x: this.player.phaser.x,
      y: this.player.phaser.y,
    });

    // this.map = mapCreateOverCharacterLayer(this.map, 'entrance-background');
  }
}

export default SeventhFloorScene;
