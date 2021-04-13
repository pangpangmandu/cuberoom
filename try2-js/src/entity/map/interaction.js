/* eslint-disable import/prefer-default-export */

import { isValidURLName, openURL } from "../../common/urlOpen";
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
  if (isValidURLName(tile.properties.name)) {
    openURL(tile.properties.name);
  } else {
    log("tile have a invalid url name");
  }
}

export function mapUpdateMousePoint(map, scene) {
  const pointer = scene.input.mousePointer;
  // FIXME: use getAnyLayer
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
