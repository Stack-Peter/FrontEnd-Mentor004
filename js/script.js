const showContent = document.querySelectorAll('.off');


function handleClick() {
    showContent.forEach((i) => {
        i.classList.remove('on')
    })
    this.classList.toggle('on')
}
showContent.forEach((i) => {
    i.addEventListener('click', handleClick);
})