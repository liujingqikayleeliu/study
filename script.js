// Add fact button
let getFactButton = document.getElementById('add-fact')
getFactButton.addEventListener('click', function() {
  let facts = document.getElementById('facts')
  let newFact = prompt('Enter a new fact:')
  let createListItem = document.createElement('li')
  createListItem.textContent = newFact
  facts.appendChild(createListItem)
})

// Image Slider
let image = ['images/StudyRoom 2.jpg', 'images/Studyroom 3.jpg'] // array
let currentIndex = 0

function changeImage(direction) { // Tool to use to complete a specific task
  if(direction === 'next') {
    currentIndex = (currentIndex + 1) %image.length
  }
  // Make an if-statement that uses 'prev' to go backwards
  if(direction === 'prev') {
    currentIndex = (currentIndex - 1 +image.length) %image.length
  }
  let picture = document.getElementById('picture')
  picture.src = image[currentIndex]
}

//Add event Listener for left and right arrows
document.getElementById('left').addEventListener('click', function() {
  changeImage('prev')
})

// Write the right arrow's code
document.getElementById('right').addEventListener('click',
function() {
  changeImage('next')
})