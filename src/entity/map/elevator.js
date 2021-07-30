export function showElevatorPanel(scene, floor, x, y) {
  scene.add.sprite(x, y, `el-panel-${floor}`);

  const buttonTo1F = scene.add.sprite(x - 16, y + 32, '1F').setInteractive();
  const buttonTo2F = scene.add.sprite(x + 16, y + 32, '2F').setInteractive();
  const buttonToB1 = scene.add.sprite(x + 16, y + 64, 'B1').setInteractive();

  buttonTo1F.on('pointerdown', () => scene.scene.start('FirstFloorScene', { x: 16 * 10, y: 16 * 19 }));
  buttonTo2F.on('pointerdown', () => scene.scene.start('SecondFloorScene', { x: 16 * 10, y: 16 * 19 }));
  buttonToB1.on('pointerdown', () => scene.scene.start('FirstBasementScene', { x: 16 * 10, y: 16 * 40 }));
}
