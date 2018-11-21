//Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.


function getFirstSelector(s) {
	return document.querySelector(s)
}

//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  return document.querySelector("#nested .target")
}

// - Define a function `increaseRankBy(n)` that increases the ranks in all of the
//   `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]

function increaseRankBy(n) {
  const ranked = document.querySelectorAll(".ranked-list li")

  for (let i=0; i < ranked.length; i++) {
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML) + n)
  }
}

// - Define a function `deepestChild()` that pulls out the most deeply nested child
//   element from `div#grand-node`. (Remember, you can iterate over elements and call
//   `querySelector()` and `querySelectorAll()` on them. This is challenging to
//   implement correctly, but not beyond your ability!)

function deepestChild() {
  const grandNode = document.getElementById('grand-node');
  const nodes = grandNode.querySelectorAll('div');
  return nodes[nodes.length - 1];
}
