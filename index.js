let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delete_button = document.createElement("button");
  delete_button.innerText = "x";
  delete_button.classList.add("delete");

  ul.appendChild(item);
  item.appendChild(delete_button);

  input.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(let delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }