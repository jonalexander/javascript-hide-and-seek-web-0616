function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target') 
 //return object with id = 'target' within the 'nested' class
}


 //get into grand-node 4th div down
function deepestChild() {
 var currentNode = document.getElementById("grand-node")
  //should be a group of nested div's
 var nextNode = currentNode.children[0]
  //all the div's within the currentNode, use [0] to enter array

  //iterate until you no longer have a child to act on
 while (nextNode) { 
  currentNode = nextNode 
  nextNode = currentNode.children[0] //keep incrementing currentNode
 }
 return currentNode
}

// function increaseRankBy(n) {
//   //grab all ranked-lists, returns NodeList with 2 nodes
//  var rankedLists = document.querySelectorAll('.ranked-list')

//   for (var i = 0; i < rankedLists.length; i++) {
//    var childrens = rankedLists[i].children 

//     for (var z = 0; z < childrens.length, z++) {
//      childrens[z].innerHTML = parseInt(childrens[z].innerHTML) + n
//     } 
//   } 
// }



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0, l = rankedLists.length; i < l; i++) {
    var children = rankedLists[i].children

    for (var j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
 }
