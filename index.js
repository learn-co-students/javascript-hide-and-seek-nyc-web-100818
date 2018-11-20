
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild() {
  let divs = document.getElementById("grand-node").querySelectorAll("div");
  let result;
  for (let i = 0; i < divs.length; i++) {
    let selection = divs[i].querySelector("div");
    (selection) ? result = selection : result = result;
  };
  return result
};

function increaseRankBy(n) {
  let list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n);
  };
}
