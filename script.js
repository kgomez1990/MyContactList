var filterInput = document.getElementById('filter-Input');

filterInput.addEventListener('keyup', filterNames);

function filterNames () {
    let filterValue = document.getElementById('filter-Input').value.toUpperCase()

    let names = document.getElementById('first-names')

    let nameItems = names.querySelectorAll('li.collection-item');

    for (let i = 0; i < nameItems.length; i++) {
        let a = nameItems[i].getElementsByTagName('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > - 1) {
            nameItems[i].style.display = ''
        } else {
            nameItems[i].style.display = 'none'
        }
    }
}

