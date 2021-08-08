<script>
  import Phaser from 'phaser';
  import EntranceScene from '../scenes/EntranceScene';
  import FirstFloorScene from '../scenes/FirstFloorScene';
  import FirstBasementScene from '../scenes/FirstBasementScene';
  import SecondFloorScene from '../scenes/SecondFloorScene';
  import FifthFloorScene from '../scenes/FifthFloorScene';
  import SixthFloorScene from '../scenes/SixthFloorScene';
  import SeventhFloorScene from '../scenes/SeventhFloorScene';
  import EighthFloorScene from '../scenes/EighthFloorScene';
  import SecondBasementScene from '../scenes/SecondBasementScene';

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
    scene: [EntranceScene, FirstFloorScene, FirstBasementScene, SecondFloorScene, FifthFloorScene, SixthFloorScene, SeventhFloorScene, EighthFloorScene, SecondBasementScene],
  };

  const game = new Phaser.Game(config);
  window.game = game;
</script>
