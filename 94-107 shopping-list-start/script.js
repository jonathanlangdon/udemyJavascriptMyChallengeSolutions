const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

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

// Event Listeners
itemForm.addEventListener('submit', addItem)
