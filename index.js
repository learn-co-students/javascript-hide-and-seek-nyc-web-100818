function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}


function findChild(node) {
  if (node.childElementCount > 0) {
    return findChild(node.children[0])
  } else {
    return node
  }
}

const gn = document.getElementById('grand-node')

function deepestChild() {
  return findChild(gn)
}

function increaseRankBy(n) {
  const rankLists = Array.from(document.getElementsByClassName('ranked-list'))
  console.log(rankLists);
  rankLists.forEach(function(list) {
    const listItems = Array.from(list.children)
    listItems.forEach(function(item) {
      item.innerText = parseInt(item.innerText) + n
    })
  })
}
