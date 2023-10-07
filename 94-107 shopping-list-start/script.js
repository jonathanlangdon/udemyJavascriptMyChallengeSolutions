const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')

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
  itemInput.value = ''
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove()
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
