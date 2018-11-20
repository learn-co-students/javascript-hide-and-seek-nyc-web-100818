function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // pulls a .target out of #nested
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node');
  const nodes = grandNode.querySelectorAll('div');
  return nodes[nodes.length - 1];
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
    const ranked = document.getElementsByClassName('ranked-list')
    for (let i = 0; i < ranked.length; i++) {
      ranked[i].innerHTML = (parseInt(i) + 1).toString();
    }
}
