// Importing react here is unnecessary but aims to prove something !
import React from "react";

export default function getRandomInteger(min, max) {
  min = Math.max(0, min);

  // meaningless, but just to show that importing react does not cause the issue !
  React.createElement(
    "strong",
    { style: { color: "red" } },
    "I don't cause the issue :)"
  );

  const randomFraction = Math.random();

  const randomInteger = Math.floor(randomFraction * (max - min + 1)) + min;

  return randomInteger;
}
