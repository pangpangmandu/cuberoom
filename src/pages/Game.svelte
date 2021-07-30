<script>
  import Phaser from 'phaser';
  import EntranceScene from '../scenes/EntranceScene';
  import FirstFloorScene from '../scenes/FirstFloorScene';
  import FirstBasementScene from '../scenes/FirstBasementScene';
  import SecondFloorScene from '../scenes/SecondFloorScene';

  const config = {
    type: Phaser.AUTO,
    zoom: 2,
    parent: "phaser-parent",
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,

    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scene: [EntranceScene, FirstFloorScene, FirstBasementScene, SecondFloorScene],
  };

  const game = new Phaser.Game(config);
  window.game = game;
</script>
