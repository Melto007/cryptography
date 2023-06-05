const searchIcon = document.querySelector('.search-icon')
const searchContainer = document.querySelector('.search')

searchIcon.addEventListener('click', () => {
    if(searchContainer.classList.contains('show')) {
        searchContainer.classList.remove('show')
    } else {
        searchContainer.classList.add('show')
    }
})

const dropdownIcon = document.querySelector('.dropdown-icons')
const links = document.querySelector('.links')

dropdownIcon.addEventListener('click', () => {
    if(links.classList.contains('show')) {
        links.classList.remove('show')
    } else {
        links.classList.add('show')
    }
})