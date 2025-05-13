let form = document.querySelector('form');

// select the form from html page
// handle the form submission using onsubmit
// handle the default reloading behaviour
// capture user entered value in html input element.




form.onsubmit = function (event) {
    event.preventDefault();
    let formInput = document.querySelector('form input');

    let userEnteredValue = formInput.value.trim();
    if (userEnteredValue === '') return;

    let myList = document.querySelector('.list')

    let createdItem = document.createElement('li')
    let createdParagraph = document.createElement('p')

    createdParagraph.innerText = userEnteredValue
    createdItem.appendChild(createdParagraph)

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete"

    let editBtn = document.createElement('button');
    editBtn.innerText = "Edit"


    let actionWrapper = document.createElement('div');
    actionWrapper.style.display = "flex"
    actionWrapper.style.gap = "10px"
    actionWrapper.appendChild(deleteBtn)
    actionWrapper.appendChild(editBtn)

    deleteBtn.onclick = function () {
        myList.removeChild(createdItem)
    }

    editBtn.onclick = function () {
        let userEdited = prompt('Edit this todo', userEnteredValue)
        console.log(userEdited)
        createdParagraph.innerText = userEdited
    }


    createdItem.appendChild(actionWrapper)

    myList.appendChild(createdItem);

    formInput.value = ""


}