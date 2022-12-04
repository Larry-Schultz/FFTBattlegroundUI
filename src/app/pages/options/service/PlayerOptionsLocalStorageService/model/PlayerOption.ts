
export interface PlayerOption {
  player: string;
  colorCode: string;
}

export function createPlayerOption(player: string, colorCode: string): PlayerOption {
  const playerOption: PlayerOption = {
    player,
    colorCode
  };
  return playerOption;
}
