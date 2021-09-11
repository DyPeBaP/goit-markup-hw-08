function app () {
    const buttons = document.querySelectorAll('.button-style')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.dataset.filter)
        })
    })
}