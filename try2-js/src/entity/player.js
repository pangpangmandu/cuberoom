import { log } from "../log";

const directions = ["down", "up", "left", "right"];

export function* allCharacterImageNames() {
  for (const direction of directions) {
    for (let i = 1; i < 5; i += 1) {
      yield [
        `player-${direction}-${i}`,
        `/img/캐릭터01/${direction} (${i}).png`,
      ];
    }
  }
}

function* animationFrames(direction) {
  for (let i = 1; i < 5; i += 1) {
    yield { key: `player-${direction}-${i}` };
  }
}

export function playerCreateAnimations(scene) {
  for (const direction of directions) {
    const animConfig = {
      key: `player-${direction}`,
      frames: [...animationFrames(direction)],
      frameRate: 10,
      repeat: -1,
    };
    scene.anims.create(animConfig);
    log(animConfig);
    log([...animationFrames(direction)]);
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

export function playerCreate(scene) {
  return {
    phaser: scene.physics.add.sprite(800, 600, "player-down-2", 1),
    prevAnim: null,
  };
}

function updateAnimation(player, cursors) {
  let newPrevAnim = player.prevAnim;
  if (cursors.left.isDown) {
    if (player.prevAnim !== "player-left") {
      player.phaser.anims.play("player-left", true);
      newPrevAnim = "player-left";
    }
  } else if (cursors.right.isDown) {
    if (player.prevAnim !== "player-right") {
      player.phaser.anims.play("player-right", true);
      newPrevAnim = "player-right";
    }
  } else if (cursors.up.isDown) {
    if (player.prevAnim !== "player-up") {
      player.phaser.anims.play("player-up", true);
      newPrevAnim = "player-up";
    }
  } else if (cursors.down.isDown) {
    if (player.prevAnim !== "player-down") {
      player.phaser.anims.play("player-down", true);
      newPrevAnim = "player-down";
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

    newPrevAnim = "player-idle";
  }

  return {
    ...player,
    prevAnim: newPrevAnim,
  };
}

export function playerUpdate(player, cursors) {
  updateAnimation(player, cursors);
}
