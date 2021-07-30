import { log } from "../log";
import { assert } from "../assert";
import { popupCreate } from "../entity/popup";
import EntranceScene from "../scenes/EntranceScene";
import FirstFloorScene from '../scenes/FirstFloorScene';
import FirstBasementScene from '../scenes/FirstBasementScene';
import SecondFloorScene from "../scenes/SecondFloorScene";

export function playerOnMapCreate() {
  return {
    prevTile: null,
    prevTileName: null,
  };
}

const possibleTileNames = [
  "image1-description",
  "image1-popup",
  "image2-description",
  "image2-popup",
  "image3-description",
  "image3-popup",
  "image4-description",
  "image4-popup",
  "image5-description",
  "image6-description",
  "image7-description",
  "image8-description",
  "image9-description",
];

const imageNames = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
  "image9",
];

function parseImageName(tileName) {
  const imageName = tileName.substring(0, 6);
  assert(imageNames.includes(imageName), "image name");
  return imageName;
}

/**
 * 플레이어가 위치한 타일에 따라 특정 동작을 함
 */
export function playerOnMapUpdate(playerOnMap, player, map, scene) {
  const playerX = player.phaser.x;
  const playerY = player.phaser.y;
  const curTile = map.interactionLayer.getTileAtWorldXY(playerX, playerY);
  const curTileName = curTile?.properties?.name;
  if (playerOnMap.prevTileName !== curTileName) {
    log(curTileName);
    if (scene instanceof EntranceScene) { // 나중에 많아지면 switch문으로 바꾸기
      if (curTileName === 'image1') {
        scene.scene.start('FirstFloorScene');
      }
    } else if (scene instanceof FirstFloorScene) {
      if (curTileName === 'image1') {
        scene.scene.start('SecondFloorScene', { x: 16 * 6, y: 16 * 11 });
      } else if (curTileName === 'image2') {
        scene.scene.start('FirstBasementScene', { x: 16 * 3, y: 16 * 32 });
      }
    } else if (scene instanceof FirstBasementScene) {
      if (curTileName === 'image1') {
        scene.scene.start('FirstFloorScene', { x: 16 * 6, y: 16 * 11 });
      }
    } else if (scene instanceof SecondFloorScene) {
      if (curTileName === 'image2') {
        scene.scene.start('FirstFloorScene', { x: 16 * 3, y: 16 * 11 });
      }
    }

    for (const popup of scene.popups) {
      popup.phaser.destroy();
    }
    scene.popups.splice(0, scene.popups.length);

    // if (possibleTileNames.includes(curTileName)) {
    //   // scene을 너무 mutable하게 쓰는 거 같아서 좀 아쉬운걸.
    //   // 나중에 event를 남기는 걸로 바꿔보자.
    //   //      const { x, y } = mapTileToWorldXY(map, curTile);
    //   const imageName = parseImageName(curTileName);
    //   const { x, y } = map.objects[imageName];
    //   scene.popups.push(popupCreate(scene, { x, y, name: imageName }));
    // }
  }

  return {
    ...playerOnMap,
    prevTile: curTile,
    prevTileName: curTile?.properties?.name,
  };
}
