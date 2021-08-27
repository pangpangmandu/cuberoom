import { log } from "../log";
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
import { popupPos } from "../entity/works";
import startScene from "../entity/map/startScene";

export function playerOnMapCreate() {
  return {
    prevTile: null,
    prevTileName: null,
  };
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
    if (playerOnMap.prevTileName === 'elevator') hideElevatorPanel();
    if (['work-1', 'work-2'].includes(playerOnMap.prevTileName)) popupDestroy();

    switch (scene.constructor) {
      case EntranceScene:
        switch (curTileName) {
          case 'up':
            startScene(scene, 'FirstFloorScene', { x: 16 * 5, y: 16 * 30 });
            break;
          default:
            break;
        }
        break;
      case FirstFloorScene:
        switch (curTileName) {
          case 'up':
            startScene(scene, 'SecondFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            startScene(scene, 'FirstBasementScene', { x: 16 * 3, y: 16 * 32 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '1F');
            break;
          case 'out':
            startScene(scene, 'EntranceScene', { x: 16 * 27, y: 16 * 29 });
            break;
          default:
            break;
        }
        break;
      case SecondFloorScene:
        switch (curTileName) {
          case 'up':
            // 근데 2층에서 바로 5층으로 가는 게 맞나..??
            startScene(scene, 'FifthFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            startScene(scene, 'FirstFloorScene', { x: 16 * 3, y: 16 * 11 });
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
            startScene(scene, 'SixthFloorScene', { x: 16 * 6, y: 16 * 21 });
            break;
          case 'down':
            // 근데 5층에서 바로 2층으로 가는 게 맞나..??
            startScene(scene, 'SecondFloorScene', { x: 16 * 3, y: 16 * 11 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '5F');
            break;
          case 'up2':
            startScene(scene, 'SixthFloorScene', { x: 16 * 46, y: 16 * 26 });
            break;
          default:
            break;
        }
        break;
      case SixthFloorScene:
        switch (curTileName) {
          case 'up':
            startScene(scene, 'SeventhFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            startScene(scene, 'FifthFloorScene', { x: 16 * 3, y: 16 * 11 });
            break;
          case 'elevator':
            showElevatorPanel(scene, '6F');
            break;
          case 'down2':
            startScene(scene, 'FifthFloorScene', { x: 16 * 46, y: 16 * 17 });
            break;
          default:
            break;
        }
        break;
      case SeventhFloorScene:
        switch (curTileName) {
          case 'up':
            startScene(scene, 'EighthFloorScene', { x: 16 * 6, y: 16 * 20 });
            break;
          case 'down':
            startScene(scene, 'SixthFloorScene', { x: 16 * 3, y: 16 * 21 });
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
            startScene(scene, 'SeventhFloorScene', { x: 16 * 6, y: 16 * 11 });
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
            startScene(scene, 'FirstFloorScene', { x: 16 * 6, y: 16 * 11 });
            break;
          case 'down':
            startScene(scene, 'SecondBasementScene', { x: 16 * 6, y: 16 * 13 });
            break;
          case 'elevator':
            showElevatorPanel(scene, 'B1');
            break;
          case 'down2':
            startScene(scene, 'SecondBasementScene', { x: 16 * 37, y: 16 * 16 });
            break;
          case 'down3':
            startScene(scene, 'SecondBasementScene', { x: 16 * 3, y: 16 * 35 });
            break;
          case 'work-1':
            popupCreate(scene, popupPos[1], 1);
            break;
          case 'work-2':
            popupCreate(scene, popupPos[2], 2);
            break;
          case 'work-3':
            popupCreate(scene, popupPos[3], 3);
            break;
          case 'work-4':
            popupCreate(scene, popupPos[4], 4);
            break;
          default:
            break;
        }
        break;
      case SecondBasementScene:
        switch (curTileName) {
          case 'up':
            startScene(scene, 'FirstBasementScene', { x: 16 * 6, y: 16 * 32 });
            break;
          case 'elevator':
            showElevatorPanel(scene, 'B2');
            break;
          case 'work-5':
            popupCreate(scene, popupPos[5], 5);
            break;
          case 'work-6':
            popupCreate(scene, popupPos[6], 6);
            break;
          case 'work-7':
            popupCreate(scene, popupPos[7], 7);
            break;
          case 'work-8':
            popupCreate(scene, popupPos[8], 8);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  return {
    ...playerOnMap,
    prevTile: curTile,
    prevTileName: curTile?.properties?.name,
  };
}
