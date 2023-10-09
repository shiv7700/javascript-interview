// dom
//difference between node and element

// selecting elements
// const selectId = document.getElementById("para");
// console.log(selectId);

// const selectTag = document.getElementsByTagName("div");
// console.log(selectTag);

// const selectClass = document.getElementsByClassName("target");
// console.log(selectClass);

// const selectQuery = document.querySelector(".target");
// const selectQuery2 = document.querySelector("#para");
// console.log(selectQuery);
// console.log(selectQuery2);

// const queryAll = document.querySelectorAll("div");
// console.log(queryAll);

// selecting parent node
// let child = document.querySelector(".child");
// console.log(child.parentNode);
// console.log(child.parentElement);

// selecting child element
// const children = document.querySelector(".listing");
// console.log(children.childNodes);
// console.log(children.children);

// selecting sibling element
// const sibling = document.querySelector(".current");
// console.log(sibling.nextSibling);
// console.log(sibling.previousSibling);
// console.log(sibling);

// manipulating element
// const element = document.createElement("p");
// element.textContent = "local storage";
// document.body.append(element);

// adding p to a div
// const p = document.createElement("p");
// const d = document.createElement("div");
// document.body.append(d);
// d.append(p);

// adding new li to ul
// const li = document.createElement("li");
// const ele = document.querySelector(".listing");
// ele.append(li);

// innerhtml vs textcontent
// const textContent = document.querySelector(".text");
// console.log(textContent.textContent);
// console.log(textContent.innerText);

// innerhtml
// console.log(textContent.innerHTML);

// append prepened
// const middle = document.querySelector("items");
// const newElement = document.createElement("li");
// newElement.textContent = "new element";
// middle.append(newElement);

// working with attributes
let input = document.querySelector("#username");
console.log(input.id);

//change attribute
input.className = "gg";
console.log(input.className);

// set attribute
input.setAttribute("name", "send");

// get attribute
input.getAttribute("name");
console.log(input.getAttribute("name"));

// remove attribute
input.removeAttribute("name");

// has attribute
console.log(input.hasAttribute("class"));
console.log(input.hasAttribute("gg"));

// element style
const div = document.querySelector(".tar");
div.style.color = "red";
div.style.backgroundColor = "yellow";

// computed style
const style = getComputedStyle(div, "class");
console.log(style);

// classname
console.log(div.className);

// adding classname
let add = div.className;
add = add + "changed for add";
console.log(add);

// classlist : read only
console.log(div.className);
div.classList.add("getter");
div.classList.remove("getter");
div.classList.replace("getter", "setter");
