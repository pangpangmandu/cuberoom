/* eslint-disable import/prefer-default-export */

const directions = ["down", "up", "left", "right"];

export function* animationFrames(direction) {
  for (let i = 1; i < 5; i += 1) {
    yield { key: `player-${direction}-${i}` };
  }
}

export function* allCharacterImageNames() {
  for (const direction of directions) {
    for (let i = 1; i < 5; i += 1) {
      yield [
        `player-${direction}-${i}`,
        `/img/character/${direction}-${i}.png`,
      ];
    }
  }
}
