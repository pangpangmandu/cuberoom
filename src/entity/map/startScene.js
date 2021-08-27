export default function startScene(scene, sceneName, spawnPos) {
  scene.cameras.main.fadeOut(500);
  scene.cameras.main.on('camerafadeoutcomplete', () => {
    scene.scene.start(sceneName, spawnPos);
  });
}
