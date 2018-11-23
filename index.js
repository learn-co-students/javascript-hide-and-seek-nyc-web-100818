function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  const parent = document.querySelectorAll('#grand-node div')
  const deepestChild = parent[parent.length - 1]
  return deepestChild
}
