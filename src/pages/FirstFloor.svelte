<script>
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
		scene.add.sprite(1920 / 2, 1088 / 2, "background");
	}

	class CuberoomScene extends Phaser.Scene {
		constructor() {
			super();
			this.map = null;
			this.player = null;
			this.cursors = null;
			this.playerOnMap = null;
			this.popups = [];
		}

		preload() {
			this.load.image("background", "/img/art-0416.png");
			this.load.image("collision-tileset", "/tilemap/simple_tile.png");
			this.load.image("interactive-tile", "/tilemap/interactive-tile.png");
			this.load.image("popup", "/img/popup.png");
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

			this.map = mapCreate(this);
			this.player = playerCreate(this);
			this.playerOnMap = playerOnMapCreate();
			this.physics.add.collider(this.player.phaser, this.map.collisionLayer);

			this.map = mapCreateOverCharacterLayer(this.map);

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
</script>
