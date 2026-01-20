const deleteButton = document.querySelector ("#deleteButton")
console.log(deleteButton)

function deleteButtonActive () {
    const body = document.querySelector ("#body")
    console.log(body)
    body.toggleAttribute("hidden")
}

deleteButton.addEventListener("click",deleteButtonActive)