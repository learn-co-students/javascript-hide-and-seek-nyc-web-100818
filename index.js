function getFirstSelector(search) {
  return document.querySelector(search)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let node = document.getElementById("grand-node")
  let childnode = node.children[0]

  while (childnode) {
    node = childnode
    childnode = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  let arr = Array.from(document.querySelectorAll("ul.ranked-list")) //takes ul.ranked-list into an array
  arr.forEach(ul => { //iterating w forEach and create a UL function
    let liNum = Array.from(ul.querySelectorAll("li")); //take ul array and get the <li>2</li>....
    liNum.forEach(li => { //take liNUM and iterate through LI to get numbers inside 2, 5, 4 ...
      li.innerHTML = parseInt(li.innerHTML) + n //take those number strings and make it into integer
    })
  })
}
