import _ from "lodash";
import Tiger, { NAME as NAME_OF_U5 } from "./utilities";

// console.log(utilities.Nijou(3));
console.log(NAME_OF_U5);
console.log(Tiger.say());

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "webpack", "!!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(component());
