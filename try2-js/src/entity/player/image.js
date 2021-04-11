/* eslint-disable import/prefer-default-export */

const directions = ["down", "up", "left", "right"];

export function* allCharacterImageNames() {
  for (const direction of directions) {
    for (let i = 1; i < 5; i += 1) {
      yield [
        `player-${direction}-${i}`,
        `/img/캐릭터01/${direction} (${i}).png`,
      ];
    }
  }
}
