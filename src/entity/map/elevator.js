let panelContainer;
let selectedFloor;

function elFloorButton(x, y, floor) {
  const button = document.createElement('button');
  button.classList.add('floor-button')
  button.style.width = '48px';
  button.style.height = '48px';
  button.style.position = 'absolute';
  button.style.top = `${y}px`;
  button.style.left = `${x}px`;
  button.style.border = 'none';
  button.style.backgroundImage = `url("/img/ui-map/el_${floor}.png")`;
  button.style.opacity = 0;
  button.onclick = () => {
    for (const b of panelContainer.getElementsByClassName('floor-button')) {
      b.style.opacity = 0;
    };
    selectedFloor = floor;
    button.style.opacity = 1;
  }

  return button;
}

export function hideElevatorPanel() {
  if (panelContainer) document.body.removeChild(panelContainer);
}

export function showElevatorPanel(scene, floor) {
  panelContainer = document.createElement('div');
  panelContainer.style.position = 'absolute';
  panelContainer.style.top = '0px';
  panelContainer.style.left = '0px';
  panelContainer.style.width = '100%';
  panelContainer.style.height = '100%';
  panelContainer.style.display = 'flex';
  panelContainer.style.justifyContent = 'center';
  panelContainer.style.alignItems = 'center';

  const panel = document.createElement('div');
  panel.style.width = '224px';
  panel.style.height = '472px';
  panel.style.position = 'relative';

  panelContainer.appendChild(panel);

  panel.appendChild(elFloorButton(56, 276, '1F'));
  panel.appendChild(elFloorButton(120, 276, '2F'));
  panel.appendChild(elFloorButton(56, 212, '5F'));
  panel.appendChild(elFloorButton(120, 212, '6F'));
  panel.appendChild(elFloorButton(56, 148, '7F'));
  panel.appendChild(elFloorButton(120, 340, 'B1'));
  panel.appendChild(elFloorButton(56, 340, 'B2'));

  const elCloseButton = document.createElement('button');
  elCloseButton.classList.add('floor-button')
  elCloseButton.style.width = '48px';
  elCloseButton.style.height = '48px';
  elCloseButton.style.position = 'absolute';
  elCloseButton.style.top = `404px`;
  elCloseButton.style.left = `120px`;
  elCloseButton.style.border = 'none';
  elCloseButton.style.backgroundImage = 'url("/img/ui-map/el_close.png")';
  elCloseButton.style.opacity = 0;
  // elCloseButton.onmousedown(() => elCloseButton.style.opacity = 1);
  elCloseButton.onclick = () => {
    elCloseButton.style.opacity = 1;
    hideElevatorPanel();
    switch (selectedFloor) {
      case '1F':
        scene.scene.start('FirstFloorScene', { x: 16 * 9, y: 16 * 21 });
        break;
      case '2F':
        scene.scene.start('SecondFloorScene', { x: 16 * 9, y: 16 * 21 });
        break;
      case '5F':
        scene.scene.start('FifthFloorScene', { x: 16 * 9, y: 16 * 22 });
        break;
      case '6F':
        scene.scene.start('SixthFloorScene', { x: 16 * 9, y: 16 * 30 });
        break;
      case '7F':
        scene.scene.start('SeventhFloorScene', { x: 16 * 9, y: 16 * 22 });
        break;
      case 'B1':
        scene.scene.start('FirstBasementScene', { x: 16 * 9, y: 16 * 42 });
        break;
      case 'B2':
        scene.scene.start('SecondBasementScene', { x: 16 * 9, y: 16 * 23 });
        break;
      default:
        break;
    }
  }

  panel.appendChild(elCloseButton);

  panel.style.backgroundImage = `url("/img/ui-map/el_panel_${floor}.png")`;
  document.body.appendChild(panelContainer);
}
