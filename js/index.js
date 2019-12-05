// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});


const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

let divs = document.querySelectorAll('div');
 
function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!
 
  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
Now click on the div containing "5". You should see

5 bubbled
4 bubbled
3 bubbled
2 bubbled
1 bubbled
In the console, you can see the event starts at div 5, and then it bubbles up to the topmost node. Along the way, it triggers any other nodes that are listening for the event -- in this case, 'click'.

Try clicking on a node that's not so deeply nested -- you should still see the event bubble up, starting at the node that you clicked and hitting every node up the tree until it reaches the top.

What about capturing? In order to capture, we need to set the third argument to addEventListener to true. Let's try it out.

divs = document.querySelectorAll('div');
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
