/* eslint-disable import/prefer-default-export */

import { log } from "../../log";
import { animationFrames } from "./image";

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
