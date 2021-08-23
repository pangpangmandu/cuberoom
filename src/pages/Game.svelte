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
  import { io } from 'socket.io-client';

  const socket = io.connect('http://localhost:3000');
  // const socket = io.connect('https://cuberoom.net');
  window.socket = socket;

  let chat = '';
  let chatTimer;

  socket.on('connect', () => {
    socket.emit('addPlayer', { id: socket.id, floor: 'entrance' }); // 아니다 이건 각 신으로 옮겨야 함
  });

  socket.on('disconnect', () => {
    window.socket = undefined;
    window.playerImgUrl = undefined;
  })

  socket.on('connect_error', (err) => {
    console.error(err);
  });

  socket.on('addChat', (data) => {
    console.log('addChat', data);
  });

  socket.on('removeChat', () => {
    console.log('removeChat');
  });

  function addChat() {
    clearTimeout(chatTimer);
    socket.emit('addChat', { id: 0, chat });
    chatTimer = setTimeout(() => socket.emit('removeChat', { id: 0 }), 3000); // 3초 뒤에 말풍선 삭제
  }

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

<div id="chat">
  <input placeholder="엔터 키를 누르면 대화할 수 있습니다." bind:value={chat} />
  <button on:click={addChat}>↵</button>
</div>

<style>
  #chat {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    display: flex;
    background-color: black;
    padding: 10px;
  }

  #chat input {
    flex: 1;
    margin-right: 10px;
    font-family: NeoDunggeunmo;
    padding: 14px;
    border: none;
    font-size: 20px;
  }

  #chat input:focus {
    outline: none;
  }

  #chat button {
    background-color: lightgrey;
    font-family: NeoDunggeunmo;
    border: none;
    font-size: 30px;
    width: 60px;
  }

  @media (orientation: portrait) {
    #chat {
      left: 0px;
      right: 0px;
      bottom: 0px;
      padding: 10px;
    }

    #chat input {
      padding: 10px;
      font-size: 16px;
      margin-right: 10px;
    }

    #chat button {
      width: 50px;
      font-size: 24px;
    }
  }
</style>
