import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

const hello = document.createElement("h1");
hello.textContent = greeting;

document.body.appendChild(hello);
