import { log } from "../log";
import { assert } from "../assert";
import { popupCreate, popupDestroy } from "../entity/popup";
import { showElevatorPanel, hideElevatorPanel } from '../entity/map/elevator';
import EntranceScene from "../scenes/EntranceScene";
import FirstFloorScene from '../scenes/FirstFloorScene';
import FirstBasementScene from '../scenes/FirstBasementScene';
import SecondFloorScene from '../scenes/SecondFloorScene';
import FifthFloorScene from '../scenes/FifthFloorScene';
import SixthFloorScene from '../scenes/SixthFloorScene';
import SeventhFloorScene from '../scenes/SeventhFloorScene';
import EighthFloorScene from '../scenes/EighthFloorScene';
import SecondBasementScene from '../scenes/SecondBasementScene';

export function playerOnMapCreate() {
  return {
    prevTile: null,
    prevTileName: null,
  };
}

// const possibleTileNames = [
//   "image1-description",
//   "image1-popup",
//   "image2-description",
//   "image2-popup",
//   "image3-description",
//   "image3-popup",
//   "image4-description",
//   "image4-popup",
//   "image5-description",
//   "image6-description",
//   "image7-description",
//   "image8-description",
//   "image9-description",
// ];

// const imageNames = [
//   "image1",
//   "image2",
//   "image3",
//   "image4",
//   "image5",
//   "image6",
//   "image7",
//   "image8",
//   "image9",
// ];

// function parseImageName(tileName) {
//   const imageName = tileName.substring(0, 6);
//   assert(imageNames.includes(imageName), "image name");
//   return imageName;
// }

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
    if (playerOnMap.prevTileName === 'elevator') hideElevatorPanel();
    if (['work-1', 'work-2'].includes(playerOnMap.prevTileName)) popupDestroy();

    switch (scene.constructor) {
      case EntranceScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('FirstFloorScene');
            break;
          case 'down':
            break;
          case 'elevator':
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case FirstFloorScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('SecondFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            scene.scene.start('FirstBasementScene', { x: 16 * 3, y: 16 * 32 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '1F');
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case SecondFloorScene:
        switch (curTileName) {
          case 'up':
            // 근데 2층에서 바로 5층으로 가는 게 맞나..??
            scene.scene.start('FifthFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            scene.scene.start('FirstFloorScene', { x: 16 * 3, y: 16 * 11 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '2F');
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case FifthFloorScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('SixthFloorScene', { x: 16 * 6, y: 16 * 21 });
            break;
          case 'down':
            // 근데 5층에서 바로 2층으로 가는 게 맞나..??
            scene.scene.start('SecondFloorScene', { x: 16 * 3, y: 16 * 11 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '5F');
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case SixthFloorScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('SeventhFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            scene.scene.start('FifthFloorScene', { x: 16 * 3, y: 16 * 11 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '6F');
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case SeventhFloorScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('EighthFloorScene', { x: 16 * 6, y: 16 * 20 });
            break;
          case 'down':
            scene.scene.start('SixthFloorScene', { x: 16 * 3, y: 16 * 21 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '7F');
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case EighthFloorScene:
        switch (curTileName) {
          case 'up':
            break;
          case 'down':
            scene.scene.start('SeventhFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'elevator':
            break;
          case 'popup':
            break;
          default:
            break;
        }
        break;
      case FirstBasementScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('FirstFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            scene.scene.start('SecondBasementScene', { x: 16 * 3, y: 16 * 13 });
            break;
          case 'elevator':
            showElevatorPanel(scene, 'B1');
            break;
          case 'work-1':
            popupCreate(scene, { x: 16 * 21, y: 16 * 43.5 });
            break;
          case 'work-2':
            popupCreate(scene, { x: 16 * 28, y: 16 * 43.5 });
            break;
          default:
            break;
        }
        break;
      case SecondBasementScene:
        switch (curTileName) {
          case 'up':
            scene.scene.start('FirstBasementScene', { x: 16 * 6, y: 16 * 32 });
            break;
          case 'down':
            break;
          case 'elevator':
            showElevatorPanel(scene, 'B2');
            break;
          case 'work-1':
            popupCreate(scene, { x: 16 * 21, y: 16 * 24.5 });
            break;
          case 'work-2':
            popupCreate(scene, { x: 16 * 28, y: 16 * 24.5 });
            break;
          default:
            break;
        }
        break;
      default:
        break;
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
