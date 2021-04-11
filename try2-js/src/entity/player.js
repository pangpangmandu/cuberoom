const directions = ["down", "up", "left", "right"];

export function playerCreateAnimations(scene) {
  for (const direction of directions) {
    const animConfig = {
      key: `player-${direction}`,
      frames: [...animationFrames(direction)],
      frameRate: 10,
      repeat: -1,
    };
    scene.anims.create(animConfig);
    console.log(animConfig);
    console.log([...animationFrames(direction)]);
  }

  for (const direction of directions) {
    scene.anims.create({
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

function* animationFrames(direction) {
  for (let i = 1; i < 5; i++) {
    yield { key: `player-${direction}-${i}` };
  }
}

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
