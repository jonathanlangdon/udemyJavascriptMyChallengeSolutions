const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function displayItems() {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.forEach(item => addItemToDOM(item))
  checkUI()
}

function onaddItemSubmit(e) {
  e.preventDefault()

  // Validate Input
  if (itemInput.value === '') {
    alert('Please add an item')
    return
  }

  const newItem = itemInput.value
  addItemToDOM(newItem)
  addItemToStorage(newItem)
  checkUI()

  itemInput.value = ''
}

function addItemToDOM(item) {
  const li = document.createElement('li')
  const button = document.createElement('button')
  const icon = document.createElement('i')
  button.classList = 'remove-item btn-link text-red'
  button.appendChild(icon)
  icon.classList = 'fa-solid fa-xmark'
  li.innerText = item
  li.appendChild(button)
  itemList.appendChild(li)
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.push(item)
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage() {
  let itemsFromStorage

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = []
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'))
  }
  return itemsFromStorage
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
  checkUI()
}

function clearItems(e) {
  if (confirm('Are you sure?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild)
      checkUI()
    }
  }
}

function filterItems(e) {
  const text = e.target.value.toLowerCase()
  const items = itemList.querySelectorAll('li')

  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLowerCase()
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
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

function init() {
  // Event Listeners
  itemForm.addEventListener('submit', onaddItemSubmit)
  itemList.addEventListener('click', removeItem)
  clearBtn.addEventListener('click', clearItems)
  itemFilter.addEventListener('input', filterItems)
  document.addEventListener('DOMContentLoaded', displayItems)
  displayItems()
  checkUI()
}

init()
