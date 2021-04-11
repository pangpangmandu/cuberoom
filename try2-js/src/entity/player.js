export default class Player {
  // prevMove
  constructor(scene) {
    this.phaser = scene.physics.add.sprite(800, 600, "player-down-2", 1);
    this.prevAnim = null;
  }

/**
 * @param {Phaser.Cursors} cursors
 */
  update(cursors) {
    this.updateAnimation(cursors);
  }

  updateAnimation(cursors) {
    if (cursors.left.isDown) {
      if (this.prevAnim !== "player-left") {
        this.phaser.anims.play("player-left", true);
        this.prevAnim = "player-left";
      }
    } else if (cursors.right.isDown) {
      if (this.prevAnim !== "player-right") {
        this.phaser.anims.play("player-right", true);
        this.prevAnim = "player-right";
      }
    } else if (cursors.up.isDown) {
      if (this.prevAnim !== "player-up") {
        this.phaser.anims.play("player-up", true);
        this.prevAnim = "player-up";
      }
    } else if (cursors.down.isDown) {
      if (this.prevAnim !== "player-down") {
        this.phaser.anims.play("player-down", true);
        this.prevAnim = "player-down";
      }
    } else {
      if (this.prevAnim === "player-up") {
        this.phaser.anims.play("player-up-stop", true);
      } else if (this.prevAnim === "player-down") {
        this.phaser.anims.play("player-down-stop", true);
      } else if (this.prevAnim === "player-left") {
        this.phaser.anims.play("player-left-stop", true);
      } else if (this.prevAnim === "player-right") {
        this.phaser.anims.play("player-right-stop", true);
      } else {
        this.phaser.anims.stop();
      }

      this.prevAnim = "player-idle";
    }
  }
}
