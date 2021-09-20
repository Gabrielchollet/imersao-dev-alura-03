var books = {
    name: [],
    url: [],
    chapter: []
}

function openModal() {
    document.querySelector('.modal-overlay').classList.add('active')
}

function closeModal() {
    document.querySelector('.modal-overlay').classList.remove('active')
}

function validateFields() {
    title = document.querySelector('input#title').value
    book_url = document.querySelector('input#book_url').value
    chapter = document.querySelector('input#chapter').value

    if (title.trim() === "" || book_url.trim() === "" || chapter.trim() === "") {
        throw new Error("Por favor, preencha todos os campos")
    }

    for (let index in books) {
        if (title == books.name[index]) {
            throw new Error("Você já registrou uma leitura com este título")
        }
        if (book_url == books.url[index]) {
            throw new Error("Você já registrou uma leitura com esta imagem")
        }
    }
}

function storage() {
    title = document.querySelector('input#title').value
    book_url = document.querySelector('input#book_url').value
    chapter = document.querySelector('input#chapter').value

    books.name.push(title)
    books.url.push(book_url)
    books.chapter.push(chapter)
}

function clearFields() {
    document.querySelector('input#title').value = ""
    document.querySelector('input#book_url').value = ""
    document.querySelector('input#chapter').value = ""
}

function submitForm(event) {
    event.preventDefault()

    try {
        // verificar se todas as informações foram preenchidas
        validateFields()
        // salvar
        storage()
        // apagar os dados do formulário
        clearFields()
        // modal feche
        closeModal()
    } catch (error) {
        alert(error.message)
    }
}