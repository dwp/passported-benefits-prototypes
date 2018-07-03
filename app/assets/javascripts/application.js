/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()


  // Accordian on results page
  let accordia = document.querySelectorAll('.app-task-list .app-task-list__item')
  accordia.forEach((accordion)=>{


    accordion.querySelector('button').addEventListener('click', (e)=>{
      let description = accordion.querySelector('.description');
      let label = accordion.querySelector('.show-label');
      // Open/close description
      if (description.classList.contains('open')) {
        description.classList.remove('open')
      } else {
        description.classList.add('open')
      }
      // Change label text
      if (label.innerHTML === 'Show details') {
        label.innerHTML = 'Hide details'
      } else {
        label.innerHTML = 'Show details'
      }
    })
  })
})
