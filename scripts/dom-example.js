const content = document.querySelector(".content");
console.log(content.textContent);
console.log(content.innerText);
console.log(content.innerHTML);
content.classList.add("active");
content.classList.remove("active");
console.log(content.classList.contains("active"));
const contentClassName = content.getAttribute("class");
content.className = `${contentClassName} active gradient opacity`;
const button = document.createElement("button");
button.classList.add("button-primary");
button.textContent = "Click me";
document.body.appendChild(button);

const btnClone = button.cloneNode(true);
document.body.appendChild(btnClone);
console.log(btnClone.hasChildNodes());

// content.insertAdjacentText("afterend", "Evondev ");
const span = document.createElement("span");
span.textContent = "Evondev";
// content.insertAdjacentElement("afterbegin", span);
// const tab = document.createElement("div");
// tab.classList.add("tab");
// const tabList = document.createElement("div");
// tabList.classList.add("tab-list");
// const tabItem = document.createElement("div");
// tabItem.classList.add("tab-item");
// tabList.appendChild(tabItem);
// tab.appendChild(tabList);
// document.body.appendChild(tab);

const tabTemplate = `<div class="tab">
<div class="tab-list">
  <div class="tab-item is-active">Recent</div>
  <div class="tab-item">Popular</div>
  <div class="tab-item">Trending</div>
</div>
<div class="tab-content">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
  aspernatur animi asperiores repudiandae officiis molestiae! Neque atque
  quibusdam eum eos culpa animi similique dolores ea maxime assumenda
  delectus, in expedita?
</div>
</div>`;
// document.body.insertAdjacentHTML("beforeend", tabTemplate);
// button.insertAdjacentElement("beforeend", span);
// document.body.insertBefore(span, button);

const span2 = document.querySelector(".text2");
console.log(span2.parentNode);
console.log(span2.parentElement);
console.log(span2.previousSibling);
console.log(span2.nextSibling);
const textWrapper = document.querySelector(".text-wrapper");
console.log(textWrapper.firstElementChild);
console.log(textWrapper.lastElementChild);
console.log(textWrapper.children);
console.log(textWrapper.childNodes);

const boxed = document.querySelector(".boxed");
console.log(boxed.clientWidth);
console.log(boxed.clientHeight);
console.log(boxed.clientLeft);
console.log(boxed.clientTop);
console.log(boxed.getBoundingClientRect());
