export type Jackpot = {
  amount: string;
  nextDraw: string;
  drawTime: string;
};

export const defaultJackpot: Jackpot = {
  amount: "€150,000,000",
  nextDraw: "Friday",
  drawTime: "9:00 PM CET",
};