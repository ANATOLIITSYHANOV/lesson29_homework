/**
 * Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
 */

let click = document.getElementById("click"),
  topDiv = document.getElementById("top"),
  centerDiv = document.getElementById("center"),
  bottomDiv = document.getElementById("bottom");

click.onclick = () => {
  if (topDiv.classList.contains('red')) {
    topDiv.classList.remove("red");
    centerDiv.classList.add("yellow");
  } else if (centerDiv.classList.contains("yellow")) {
    centerDiv.classList.remove("yellow");
    bottomDiv.classList.add("green");
  } else if (bottomDiv.classList.contains("green")) {
    bottomDiv.classList.remove("green");
    topDiv.classList.add("red");
  }
  else {
    topDiv.classList.add("red");
  }
}
