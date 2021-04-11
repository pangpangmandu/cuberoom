export function playerCreate(scene) {
  return {
    phaser: scene.physics.add.sprite(800, 600, "player-down-2", 1),
    prevAnim: null,
  };
}

export function playerUpdate(player, cursors) {
  updateAnimation(player, cursors);
}

function updateAnimation(player, cursors) {
  if (cursors.left.isDown) {
    if (player.prevAnim !== "player-left") {
      player.phaser.anims.play("player-left", true);
      player.prevAnim = "player-left";
    }
  } else if (cursors.right.isDown) {
    if (player.prevAnim !== "player-right") {
      player.phaser.anims.play("player-right", true);
      player.prevAnim = "player-right";
    }
  } else if (cursors.up.isDown) {
    if (player.prevAnim !== "player-up") {
      player.phaser.anims.play("player-up", true);
      player.prevAnim = "player-up";
    }
  } else if (cursors.down.isDown) {
    if (player.prevAnim !== "player-down") {
      player.phaser.anims.play("player-down", true);
      player.prevAnim = "player-down";
    }
  } else {
    if (player.prevAnim === "player-up") {
      player.phaser.anims.play("player-up-stop", true);
    } else if (player.prevAnim === "player-down") {
      player.phaser.anims.play("player-down-stop", true);
    } else if (player.prevAnim === "player-left") {
      player.phaser.anims.play("player-left-stop", true);
    } else if (player.prevAnim === "player-right") {
      player.phaser.anims.play("player-right-stop", true);
    } else {
      player.phaser.anims.stop();
    }

    player.prevAnim = "player-idle";
  }
}
