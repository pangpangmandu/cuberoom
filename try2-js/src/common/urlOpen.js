import { assert } from "../assert";

const externalURLNames = ["image1", "image2", "image3", "image4"];

export function isValidURLName(urlName) {
  return externalURLNames.includes(urlName);
}

export function openURL(urlName) {
  assert(externalURLNames.includes(urlName), "urlname");

  switch (urlName) {
    case "image1":
      window.open("https://standlaid.github.io/portfolio/OE/M1988.html");
      break;
    case "image2":
      window.open("https://standlaid.github.io/portfolio/OE/Ms.html");
      break;
    case "image3":
      window.open("https://standlaid.github.io/portfolio/OE/M.html");
      break;
    case "image4":
      window.open("https://standlaid.github.io/portfolio/OE/SS.html");
      break;
    default:
      throw new Error("invalid url name");
  }
}
