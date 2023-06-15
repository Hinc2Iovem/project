const btnsContainer = document.querySelector('.buttons');
let openElement = null;

const kanbanSection = document.getElementById('kanban');
document.addEventListener('DOMContentLoaded', function() {
  
  kanbanSection.classList.remove('none'); // Initially hide the 'kanban' block
});

btnsContainer.addEventListener('click', function(e) {
  let target = e.target.dataset.id;

  if(target !== kanbanSection){
    kanbanSection.classList.add('none');
  }
  
  if (target) {
    const elements = document.getElementsByClassName(target);

    if (openElement !== null && openElement !== target) {
      const prevElements = document.getElementsByClassName(openElement);
      for (let i = 0; i < prevElements.length; i++) {
        prevElements[i].classList.add('none');
      }
    }

    // Toggle the display of the clicked block
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('none');
    }
    
    // Update the openElement to the current target
    openElement = target;
  }
});