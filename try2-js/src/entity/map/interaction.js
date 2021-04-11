/* eslint-disable import/prefer-default-export */

import { log } from "../../log";

export function mapOnPointerDown(map, pointer) {
  const tile = map.interactionLayer.getTileAtWorldXY(
    pointer.worldX,
    pointer.worldY
  );
  if (tile == null) {
    return;
  }

  log(tile.properties.name);
  if (tile.properties.name === "image1") {
    window.open("https://google.com");
  } else if (tile.properties.name === "image2") {
    window.open("https://naver.com");
  } else if (tile.properties.name === "image3") {
    window.open("https://standlaid.github.io/portfolio/OE/M.html");
  } else if (tile.properties.name === "image4") {
    window.open("https://standlaid.github.io/portfolio/OE/SS.html");
  }
}

export function mapUpdateMousePoint(map, scene) {
  const pointer = scene.input.mousePointer;
  const tile = map.interactionLayer.getTileAtWorldXY(
    pointer.worldX,
    pointer.worldY
  );

  if (tile == null) {
    scene.input.setDefaultCursor("auto");
    return;
  }
  if (tile.properties.name === "image1") {
    scene.input.setDefaultCursor("pointer");
  } else if (tile.properties.name === "image2") {
    scene.input.setDefaultCursor("pointer");
  } else if (tile.properties.name === "image3") {
    scene.input.setDefaultCursor("pointer");
  } else if (tile.properties.name === "image4") {
    scene.input.setDefaultCursor("pointer");
  }
}
