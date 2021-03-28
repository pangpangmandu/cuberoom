var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "phaser-example",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);
var map;
var cursors;
var debugGraphics;
var hepText;
var player;
var showDebug = false;

function preload() {
  this.load.image("background", "./img/미술관내부0216.png");
  this.load.image("tileset", "./tilemap/simple_tile.png");
  this.load.tilemapTiledJSON({
    key: "map",
    url: "./tilemap/example_map.json",
  });
  this.load.image("player", "./img/down (1).png");
}

function create() {
  map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
  var imageLayerIndex = map.getImageIndex("Image Layer 1");
  var imageLayer = map.images[imageLayerIndex];
  // this.add.sprite(imageLayer.x, imageLayer.y, "background");

  var tileset = map.addTilesetImage("simple", "tileset");
  var background_tileset = map.addTilesetImage(
    "background-tileset",
    "background"
  );
  //	var background = map.addTilesetImage("Image Layer 1", "background");
  var layer1 = map.createLayer(1, tileset, 0, 0);
  var layer2 = map.createLayer(0, background_tileset, 0, 0);
  map.setCollisionByProperty(
    {
      collides: true,
    },
    true,
    true,
    1
  );

  /*
            name: (curGroupState.name + curi.name),
            image: curi.image,
            x: (curGroupState.x + layerOffsetX + curi.x),
            y: (curGroupState.y + layerOffsetY + curi.y),

*/
  //	map.
  console.log(map.images);
  // var layer2 = map.createLayer(1, background, 0, 0);

  player = this.physics.add.sprite(50, 100, "player", 1);

  this.physics.add.collider(player, layer1);

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  this.cameras.main.startFollow(player);

  debugGraphics = this.add.graphics();

  this.input.keyboard.on("keydown-C", (_event) => {
    showDebug = !showDebug;
    console.log("keydown called");
    drawDebug();
  });

  cursors = this.input.keyboard.createCursorKeys();

  helpText = this.add.text(16, 16, "", {
    fontSize: "20px",
    fill: "#ffffff",
  });

  helpText.setScrollFactor(0);
  updateHelpText();
}

function update() {
  player.body.setVelocity(0);

  if (cursors.left.isDown) {
    // 왜 velocity를 쓸까? 좌표를 바로 움직이면 충돌처리가 잘 안되겠지?
    player.body.setVelocityX(-200);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(200);
  }

  if (cursors.up.isDown) {
    player.body.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(200);
  }
}

function drawDebug() {
  debugGraphics.clear();

  if (showDebug) {
    map.renderDebug(
      debugGraphics,
      {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200),
        faceColor: new Phaser.Display.Color(40, 39, 37, 255),
      },
      1
    );
  }

  updateHelpText();
}

function updateHelpText() {
  helpText.setText(`HI debug is ${this.showDebug}`);
}
