
const element = document.getElementById("addBtn");
element.addEventListener("click", newItem);

function newItem() {
    let currentList = document.createElement("li");
    let inputValue = document.getElementById("Input").value;
    let txt = document.createTextNode(inputValue);
    currentList.appendChild(txt);
    if (inputValue === '') {
        alert("Du behöver ha något i fältet för att kunna lägga till");
    } else {
        document.getElementById("theList").appendChild(currentList);
    }
    document.getElementById("Input").value = "";

    let span = document.createElement("SPAN");
    let button = document.createTextNode("x");
    span.className = "close";
    span.appendChild(button);
    currentList.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let hideElement = this.parentElement;
            hideElement.style.display = "none";
        }
    }

}

let currentList = document.getElementsByTagName("li");

for (i = 0; i < currentList.length; i++) {
    let span = document.createElement("SPAN");
    let button = document.createTextNode("x");
    span.className = "close";
    span.appendChild(button);
    currentList[i].appendChild(span);
    
}

let close = document.getElementsByClassName("close");
for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        let hideElement = this.parentElement;
        hideElement.style.display = "none";
    }
}


let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);







