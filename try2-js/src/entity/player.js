import { updateAnimation } from "./player/animation";

export function playerCreate(scene) {
  return {
    phaser: scene.physics.add.sprite(800, 600, "player-down-2", 1),
    prevAnim: null,
    prevMove: null,
  };
}

function move(player, cursors, scene) {
  let moved = false;
  let velocity = 100;

  if (scene.cheat) {
    velocity *= 10;
  }

  let newPrevMove = player.prevMove;
  if (cursors.left.isDown) {
    if (player.prevMove !== "left") {
      player.phaser.body.setVelocityX(-velocity);
      newPrevMove = "left";
    }
    moved = true;
  } else if (cursors.right.isDown) {
    if (player.prevMove !== "right") {
      player.phaser.body.setVelocityX(velocity);
      newPrevMove = "right";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    if (player.prevMove !== "up") {
      player.phaser.body.setVelocityY(-velocity);
      newPrevMove = "up";
    }
    moved = true;
  } else if (cursors.down.isDown) {
    if (player.prevMove !== "down") {
      player.phaser.body.setVelocityY(velocity);
      newPrevMove = "down";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityY(0);
  }

  if (moved === false) {
    player.phaser.body.setVelocity(0);
  }

  return {
    ...player,
    prevMove: newPrevMove,
  };
}

export function playerUpdate(player, cursors, scene) {
  let newPlayer = updateAnimation(player, cursors);
  newPlayer = move(newPlayer, cursors, scene);
  return newPlayer;
}
