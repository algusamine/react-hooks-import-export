import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Hufflepuff";
//import * as GryffFunctions from "./houses/Gryffindor";
import { colors, gryffMascot } from "./houses/Gryffindor";

//console.log(GryffFunctions.colors)
console.log(colors);
// => 'Scarlet and Gold'
//GryffFunctions.gryffMascot();
gryffMascot();
// => 'The Lion'

// GryffFunctions.values();
// => Attempted import error

export default function Hogwarts() {
  whoseHouse();

  return (
    <div>
      <Hufflepuff />
    </div>
  );
}