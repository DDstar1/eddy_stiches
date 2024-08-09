// Random number Generator betwwen 300 and 150

function getRandomNumber() {
  return Math.floor(Math.random() * (300 - 150 + 1)) + 150;
}

// suit Links
const suit1 = "/images/suit1.jpg";
const suit2 = "/images/suit2.jpg";
const suit3 = "/images/suit3.jpg";
const suit4 = "/images/suit4.jpg";
const suit5 = "/images/suit5.jpg";
const suit6 = "/images/suit6.jpg";
const suit7 = "/images/suit7.jpeg";
const suit8 = "/images/suit8.webp";
const suit9 = "/images/suit9.jpg";
const suit10 = "/images/suit10.jpg";
const suit11 = "/images/suit11.jpeg";
const all_suits = [
  suit1,
  suit2,
  suit3,
  suit4,
  suit5,
  suit6,
  suit7,
  suit8,
  suit9,
  suit10,
  suit11,
];

// Child Wears
const child_wr1 = "/images/child_wr1.jpg";
const child_wr2 = "/images/child_wr2.jpg";
const child_wr3 = "/images/child_wr3.jpg";
const child_wr4 = "/images/child_wr4.jpeg";
const child_wr5 = "/images/child_wr5.jpeg";
const child_wr6 = "/images/child_wr6.jpeg";
const child_wr7 = "/images/child_wr7.jpeg";
const child_wr8 = "/images/child_wr8.jpeg";
const child_wr9 = "/images/child_wr9.jpeg";
const child_wr10 = "/images/child_wr10.jpeg";
const child_wr11 = "/images/child_wr11.jpeg";
const all_child_wr = [
  child_wr1,
  child_wr2,
  child_wr3,
  child_wr4,
  child_wr5,
  child_wr6,
  child_wr7,
  child_wr8,
  child_wr9,
  child_wr10,
  child_wr11,
];

// Natives
const native1 = "/images/styled_blue_man.jpeg";
const native2 = "/images/green_man_native.jpeg";
const native3 = "/images/yellow_couple.jpeg";
const native4 = "/images/black_native.jpeg";
const native5 = "/images/green_native_stick.jpeg";
const native6 = "/images/red_gold_native.jpeg";
const native7 = "/images/red_native.jpeg";
const native8 = "/images/white_native.jpeg";
const native9 = "/images/native9.jpeg";
const native10 = "/images/native10.jpeg";
const all_native = [
  native1,
  native2,
  native3,
  native4,
  native5,
  native6,
  native7,
  native8,
  native9,
  native10,
];

export const Data = [
  {
    category: "suit",
    data: all_suits.map((suit) => ({
      src: suit,
      width: getRandomNumber(),
      height: getRandomNumber(),
      caption: `Suit ${all_suits.indexOf(suit) + 1}`,
      original: suit,
    })),
  },
  {
    category: "chil_wr",
    data: all_child_wr.map((child_wr) => ({
      src: child_wr,
      width: getRandomNumber(),
      height: getRandomNumber(),
      caption: `Child Outfit ${all_child_wr.indexOf(child_wr) + 1}`,
      original: child_wr,
    })),
  },
  {
    category: "native",
    data: all_native.map((native) => ({
      src: native,
      width: getRandomNumber(),
      height: getRandomNumber(),
      caption: `Native ${all_native.indexOf(native) + 1}`,
      original: native,
    })),
  },
];
