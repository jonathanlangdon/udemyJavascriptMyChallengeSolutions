const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function addItem(e) {
  e.preventDefault()

  // Validate Input
  if (itemInput.value === '') {
    alert('Please add an item')
    return
  }

  const newItem = itemInput.value
  const li = document.createElement('li')
  const button = document.createElement('button')
  const icon = document.createElement('i')

  button.classList = 'remove-item btn-link text-red'
  button.appendChild(icon)
  icon.classList = 'fa-solid fa-xmark'
  li.innerText = newItem
  li.appendChild(button)
  itemList.appendChild(li)

  checkUI()

  itemInput.value = ''
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove()
  }
  checkUI()
}

function clearItems(e) {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }
  checkUI()
}

function checkUI() {
  const items = itemList.querySelectorAll('li')
  if (items.length === 0) {
    clearBtn.style.display = 'none'
    filter.style.display = 'none'
  } else {
    clearBtn.style.display = 'block'
    filter.style.display = 'block'
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)

checkUI()
