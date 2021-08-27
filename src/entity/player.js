import { updateAnimation, updateMouseAnimation } from "./player/animation";

export function playerCreate(scene, x, y, name, chat, id) {
  const phaser = scene.physics.add.sprite(x, y, `${id}-down-2`, 1);
  phaser.setSize(20, 20, false).setOffset(0, 20);

  const nameLabel = scene.add.text(x, y-30, (name || '이름없음'), {
    fontFamily: '28px NeoDunggeunmo',
    fill: '#ffffff',
    stroke: '#000000',
    strokeThickness: 2,
    align: 'center',
  });

  const chatBubble = scene.add.text(x, y-45, chat, {
    fontFamily: '28px NeoDunggeunmo',
    fill: '#ffffff',
    align: 'center',
  });

  nameLabel.setOrigin(0.5, 0.5);
  chatBubble.setOrigin(0.5, 0.5);
  // nameLabel.setResolution(window.devicePixelRatio / 2)
  // chatBubble.setResolution(window.devicePixelRatio / 2)

  scene.physics.world.enable([nameLabel, chatBubble]);
  scene.physics.world.collide([nameLabel, chatBubble]);

  return {
    phaser,
    prevAnim: null,
    prevMove: null,
    nameLabel,
    chatBubble,
    id,
  };
}

function mouseMove(player, pointer, scene) {
  let moved = false;
  let velocity = 100;

  if (scene.cheat) {
    velocity *= 10;
  }

  let newPrevMove = player.prevMove;
  if(pointer.isDown){
    if(pointer.worldX + 16< player.phaser.x){
      velocity *= parseInt(player.phaser.x - pointer.worldX) * 0.007;
      if(velocity < 100){
        velocity = 100;
      }
      if (player.prevMove !== "left") {
        player.phaser.body.setVelocityX(-velocity);
        player.nameLabel.body.setVelocityX(-velocity);
        player.chatBubble.body.setVelocityX(-velocity);
        newPrevMove = "left";
      }
      moved = true;
    }else if(pointer.worldX > 16+player.phaser.x){
      velocity *= parseInt( pointer.worldX - player.phaser.x) * 0.007;
      if(velocity < 100){
        velocity = 100;
      }
      if (player.prevMove !== "right") {
        player.phaser.body.setVelocityX(velocity);
        player.nameLabel.body.setVelocityX(velocity);
        player.chatBubble.body.setVelocityX(velocity);
        newPrevMove = "right";
      }
      moved = true;
    }else{
      player.phaser.body.setVelocityX(0);
      player.nameLabel.body.setVelocityX(0);
      player.chatBubble.body.setVelocityX(0);
    }

    if (pointer.worldY +16 < player.phaser.y) {
      velocity *= parseInt( player.phaser.y - pointer.worldY) * 0.015;
      if(velocity < 100){
        velocity = 100;
      }

      if (player.prevMove !== "up") {
        player.phaser.body.setVelocityY(-velocity);
        player.nameLabel.body.setVelocityY(-velocity);
        player.chatBubble.body.setVelocityY(-velocity);
        newPrevMove = "up";
      }
      moved = true;
    } else if (pointer.worldY > 16+ player.phaser.y) {
      velocity *= parseInt(  pointer.worldY -player.phaser.y) * 0.015;
      if(velocity < 100){
        velocity = 100;
      }
      if (player.prevMove !== "down") {
        player.phaser.body.setVelocityY(velocity);
        player.nameLabel.body.setVelocityY(velocity);
        player.chatBubble.body.setVelocityY(velocity);
        newPrevMove = "down";
      }
      moved = true;
    } else {
      player.phaser.body.setVelocityY(0);
      player.nameLabel.body.setVelocityY(0);
      player.chatBubble.body.setVelocityY(0);
    }

  }
  return {
    ...player,
    prevMove: newPrevMove,
  };

}

function move(player, cursors, scene) {
  let moved = false;
  let velocity = 100;

  if (scene.cheat) {
    velocity *= 10;
  }

  let newPrevMove = player.prevMove;

  if (typeof cursors === 'string' || typeof cursors === 'undefined') {
    if (cursors === 'left') {
      if (player.prevMove !== "left") {
        player.phaser.body.setVelocityX(-velocity);
        player.nameLabel.body.setVelocityX(-velocity);
        player.chatBubble.body.setVelocityX(-velocity);
        newPrevMove = "left";
      }
      moved = true;
    } else if (cursors === 'right') {
      if (player.prevMove !== "right") {
        player.phaser.body.setVelocityX(velocity);
        player.nameLabel.body.setVelocityX(velocity);
        player.chatBubble.body.setVelocityX(velocity);
        newPrevMove = "right";
      }
      moved = true;
    } else {
      player.phaser.body.setVelocityX(0);
      player.nameLabel.body.setVelocityX(0);
      player.chatBubble.body.setVelocityX(0);
    }

    if (cursors === 'up') {
      if (player.prevMove !== "up") {
        player.phaser.body.setVelocityY(-velocity);
        player.nameLabel.body.setVelocityY(-velocity);
        player.chatBubble.body.setVelocityY(-velocity);
        newPrevMove = "up";
      }
      moved = true;
    } else if (cursors === 'down') {
      if (player.prevMove !== "down") {
        player.phaser.body.setVelocityY(velocity);
        player.nameLabel.body.setVelocityY(velocity);
        player.chatBubble.body.setVelocityY(velocity);
        newPrevMove = "down";
      }
      moved = true;
    } else {
      player.phaser.body.setVelocityY(0);
      player.nameLabel.body.setVelocityY(0);
      player.chatBubble.body.setVelocityY(0);
    }

    if (moved === false) {
      player.phaser.body.setVelocity(0);
      player.nameLabel.body.setVelocityY(0);
      player.chatBubble.body.setVelocityY(0);
    }

    return {
      ...player,
      prevMove: newPrevMove,
    };
  }

  if (cursors.left.isDown) {
    if (player.prevMove !== "left") {
      player.phaser.body.setVelocityX(-velocity);
      player.nameLabel.body.setVelocityX(-velocity);
      player.chatBubble.body.setVelocityX(-velocity);
      newPrevMove = "left";
    }
    moved = true;
  } else if (cursors.right.isDown) {
    if (player.prevMove !== "right") {
      player.phaser.body.setVelocityX(velocity);
      player.nameLabel.body.setVelocityX(velocity);
      player.chatBubble.body.setVelocityX(velocity);
      newPrevMove = "right";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityX(0);
    player.nameLabel.body.setVelocityX(0);
    player.chatBubble.body.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    if (player.prevMove !== "up") {
      player.phaser.body.setVelocityY(-velocity);
      player.nameLabel.body.setVelocityY(-velocity);
      player.chatBubble.body.setVelocityY(-velocity);
      newPrevMove = "up";
    }
    moved = true;
  } else if (cursors.down.isDown) {
    if (player.prevMove !== "down") {
      player.phaser.body.setVelocityY(velocity);
      player.nameLabel.body.setVelocityY(velocity);
      player.chatBubble.body.setVelocityY(velocity);
      newPrevMove = "down";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityY(0);
    player.nameLabel.body.setVelocityY(0);
    player.chatBubble.body.setVelocityY(0);
  }

  if (moved === false) {
    player.phaser.body.setVelocity(0);
    player.nameLabel.body.setVelocityY(0);
    player.chatBubble.body.setVelocityY(0);
  }

  return {
    ...player,
    prevMove: newPrevMove,
  };
}

export function playerUpdate(player, cursors, scene) {
  let newPlayer = updateAnimation(player, cursors);
  newPlayer = move(newPlayer, cursors, scene);
  return newPlayer;
}

export function playerMouseUpdate(player, pointer, scene) {
  let newPlayer = updateMouseAnimation(player,  pointer);
  newPlayer = mouseMove(newPlayer, pointer, scene);
  return newPlayer;
}
