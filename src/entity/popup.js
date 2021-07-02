/* eslint-disable import/prefer-default-export */

import { log } from "../log";
import { openURL } from "../common/urlOpen";

export function popupCreate(scene, { x, y, name }) {
  log(`create pop at x: ${x}, y: ${y}`);
  const popupSprite = scene.add.sprite(x + 5, y - 10, "popup");
  popupSprite.setInteractive();

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerover", () => {
    scene.input.setDefaultCursor("pointer");
  });

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerout", () => {
    scene.input.setDefaultCursor("auto");
  });

  // FIXME: event 등록 해제해야 하는지 확인 필요
  popupSprite.on("pointerdown", () => {
    openURL(name);
  });

  return {
    phaser: popupSprite,
    name,
  };
}
