let day = document.querySelector('#day')
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let calculate = document.querySelector('#calculate')

const date = new Date()
let currentDay = date.getDate()
let currentMonth = date.getMonth()
let currentYear = date.getFullYear()

document.addEventListener('click', (e) => {
  if (e.target.matches('#calculate') && day != '') {
    calculateDays(day, currentDay)
  }
})

function calculateDays(day, currentDay) {
  let dayAge = currentDay - day.value
  console.log(dayAge)
  return dayAge
}
