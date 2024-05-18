const show = document.querySelector('.fa-bars')
const showList = document.querySelector(".ul-list")
const close = document.querySelector('.fa-xmark')



show.addEventListener ('click', showNav)

function showNav () {
   showList.classList.add('add-list')
   show.style.display = "none"
}

close.addEventListener ('click', removeNav)

function removeNav () {
   showList.classList.remove('add-list')
   show.style.display = "block"
}