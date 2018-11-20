function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function  nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  const grandNode = document.getElementById('grand-node');
  const nodes = grandNode.querySelectorAll('div');
  return nodes[nodes.length - 1];
}

function increaseRankBy(n) {
  const ranked = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(i) + 1).toString();
  }
}