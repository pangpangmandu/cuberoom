
export default class PLayer {
	// prevMove
	constructor(scene) {
		this.phaser = scene.physics.add.sprite(800, 600, "player-down-2", 1);
	}
}
