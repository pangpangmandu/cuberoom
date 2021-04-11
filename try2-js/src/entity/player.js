import { updateAnimation } from "./player/animation";

export function playerCreate(scene) {
  return {
    phaser: scene.physics.add.sprite(800, 600, "player-down-2", 1),
    prevAnim: null,
  };
}

export function playerUpdate(player, cursors) {
  return updateAnimation(player, cursors);
}
