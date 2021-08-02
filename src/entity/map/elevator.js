let panelContainer;

export function showElevatorPanel(scene, floor, x, y) {
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
  panel.style.width = '112px';
  panel.style.height = '236px';
  panel.style.position = 'relative';

  panelContainer.appendChild(panel);

  const buttonTo1F = document.createElement('button');
  buttonTo1F.style.width = '24px';
  buttonTo1F.style.height = '24px';
  buttonTo1F.style.position = 'absolute';
  buttonTo1F.style.top = '138px';
  buttonTo1F.style.left = '28px';
  buttonTo1F.style.border = 'none';
  buttonTo1F.style.backgroundImage = 'url("/img/ui-map/el_1F.png")';
  buttonTo1F.onclick = () => {
    hideElevatorPanel();
    scene.scene.start('FirstFloorScene', { x: 16 * 10, y: 16 * 19 });
  }
  panel.appendChild(buttonTo1F);

  const buttonTo2F = document.createElement('button');
  buttonTo2F.style.width = '24px';
  buttonTo2F.style.height = '24px';
  buttonTo2F.style.position = 'absolute';
  buttonTo2F.style.top = '138px';
  buttonTo2F.style.left = '60px';
  buttonTo2F.style.border = 'none';
  buttonTo2F.style.backgroundImage = 'url("/img/ui-map/el_2F.png")';
  buttonTo2F.onclick = () => {
    hideElevatorPanel();
    scene.scene.start('SecondFloorScene', { x: 16 * 10, y: 16 * 19 });
  }
  panel.appendChild(buttonTo2F);

  const buttonToB1 = document.createElement('button');
  buttonToB1.style.width = '24px';
  buttonToB1.style.height = '24px';
  buttonToB1.style.position = 'absolute';
  buttonToB1.style.top = '170px';
  buttonToB1.style.left = '60px';
  buttonToB1.style.border = 'none';
  buttonToB1.style.backgroundImage = 'url("/img/ui-map/el_B1.png")';
  buttonToB1.onclick = () => {
    hideElevatorPanel();
    scene.scene.start('FirstBasementScene', { x: 16 * 10, y: 16 * 40 });
  }
  panel.appendChild(buttonToB1);

  panel.style.backgroundImage = `url("/img/ui-map/el_panel_${floor}.png")`;
  document.body.appendChild(panelContainer);
}

export function hideElevatorPanel() {
  document.body.removeChild(panelContainer);
}
