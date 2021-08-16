import { updateAnimation, updateMouseAnimation } from "./player/animation";

export function playerCreate(scene, x, y) {
  const phaser = scene.physics.add.sprite(x, y, 'player-down-2', 1);
  phaser.setSize(16, 16, false).setOffset(0, 16);

  return {
    phaser,
    prevAnim: null,
    prevMove: null,
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
        newPrevMove = "right";
      }
      moved = true;
    }else{
      player.phaser.body.setVelocityX(0);
    }
  
    if (pointer.worldY +16 < player.phaser.y) {
      velocity *= parseInt( player.phaser.y - pointer.worldY) * 0.015;
      if(velocity < 100){
        velocity = 100;
      }
      
      if (player.prevMove !== "up") {
        player.phaser.body.setVelocityY(-velocity);
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
        newPrevMove = "down";
      }
      moved = true;
    } else {
      player.phaser.body.setVelocityY(0);
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

  if (cursors.left.isDown) {
    if (player.prevMove !== "left") {
      player.phaser.body.setVelocityX(-velocity);
      newPrevMove = "left";
    }
    moved = true;
  } else if (cursors.right.isDown) {
    if (player.prevMove !== "right") {
      player.phaser.body.setVelocityX(velocity);
      newPrevMove = "right";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityX(0);
  }

  if (cursors.up.isDown) {
    if (player.prevMove !== "up") {
      player.phaser.body.setVelocityY(-velocity);
      newPrevMove = "up";
    }
    moved = true;
  } else if (cursors.down.isDown) {
    if (player.prevMove !== "down") {
      player.phaser.body.setVelocityY(velocity);
      newPrevMove = "down";
    }
    moved = true;
  } else {
    player.phaser.body.setVelocityY(0);
  }

  if (moved === false) {
    player.phaser.body.setVelocity(0);
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
