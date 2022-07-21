// Write your code here!

document.getElementById("main").remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
const newContent = document.createTextNode("Eddie is the champion");
newHeader.appendChild(newContent);
newHeader.setAttribute("id","victory");