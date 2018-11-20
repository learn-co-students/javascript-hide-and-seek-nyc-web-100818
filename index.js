
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankLists = document.querySelectorAll('.ranked-list');
  const firstList = rankLists[0];
  const secondList = rankLists[1];

  let children = firstList.children;

  for (let i = 0, l = children.length; i < l; i++) {
    let child = parseInt(children[i].innerHTML);
    let addChild = child + n;
    children[i].innerHTML = addChild.toString();
  }
  let childrenTwo = secondList.children;

  for (let i = 0, l = childrenTwo.length; i < l; i++) {
    let child = parseInt(childrenTwo[i].innerHTML);
    let addChild = child + n;
    childrenTwo[i].innerHTML = addChild.toString();
  }
}

function deepestChild() {
  let grandPa = document.querySelectorAll("#grand-node");
  let dad = ((grandPa[0].childNodes)[1].childNodes)[1].childNodes;
  let mySelf = dad[1].children[0];
  return mySelf;
}
