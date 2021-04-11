/* eslint-disable import/prefer-default-export */

import { log } from "../log";

export function popupCreate(scene, { x, y }) {
  log(`create pop at x: ${x}, y: ${y}`);
  return {
    phaser: scene.add.sprite(x, y, "popup"),
  };
}
