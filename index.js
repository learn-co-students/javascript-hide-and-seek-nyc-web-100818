function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
    let ulArr = Array.from(document.querySelectorAll("ul.ranked-list"))
    ulArr.forEach(ul => {
	     let saajid = Array.from(ul.querySelectorAll("li"))
	     saajid.forEach(li => {
         li.innerHTML = parseInt(li.innerHTML) + n
       })
     })
}
