let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("value");
let adjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");

function getTitle(event){
    event.preventDefault();
    let titleValue =titleInput.value;
    mainTitle.innerText = titleValue;
}



titleInput.addEventListener("input", getTitle);

