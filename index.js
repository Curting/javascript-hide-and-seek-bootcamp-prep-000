// 1. Get first 'selector'-element
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// 2. Pull a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target')
}

// 3. Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  var rankedLists = document.querySelector('#app').querySelectorAll('.ranked-list li')

  for (var i = 0; i < rankedLists.length; i++) {
    var newRank = parseInt(rankedLists[i].innerHTML) + n
    rankedLists[i].innerHTML = newRank.toString()
  }
}

// 4. Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node
function deepestChild() {
  var nestedDivs = document.querySelector('#grand-node').querySelectorAll('div')
  return nestedDivs[nestedDivs.length - 1]
}
