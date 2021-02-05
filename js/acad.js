const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// people section

const peoples = document.querySelectorAll('[data-people-target]')
const peopleContents = document.querySelectorAll('[data-people-content]')

peoples.forEach(people => {
  people.addEventListener('click', () => {
    const target = document.querySelector(people.dataset.peopleTarget)
    peopleContents.forEach(peopleContent => {
      peopleContent.classList.remove('active')
    })
    peoples.forEach(people => {
      people.classList.remove('active')
    })
    people.classList.add('active')
    target.classList.add('active')
  })
})

// (function($){
//   'use strict';
//     $(window).on('load', function () {
//         if ($(".pre-loader").length > 0)
//         {
//             $(".pre-loader").fadeOut("slow");
//         }
//     });
// })(jQuery)
