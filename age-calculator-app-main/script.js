let day = document.querySelector('#day')
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let calculate = document.querySelector('#calculate')
let dayIsNegative = false
let monthIsNegative = false

const date = new Date()
let currentDay = date.getDate()
let currentMonth = date.getMonth() + 1
let currentYear = date.getFullYear()
document.addEventListener('click', (e) => {
  if (e.target.matches('#calculate') && day.value != '') {
    calculateDays(day, currentDay)
  }
  if (e.target.matches('#calculate') && month.value != '') {
    calculateMonths(month, currentMonth)
  }
  if (e.target.matches('#calculate') && year.value != '') {
    calculateYears(year, currentYear)
  }
  dayIsNegative = false
  monthIsNegative = false
})

function calculateDays(day, currentDay) {
  let dayAge = currentDay - day.value
  if (dayAge < 0) {
    dayAge += daysInMonth(currentMonth - 1)
    dayIsNegative = true
  }
  console.log(dayAge)
  return dayAge
}

function daysInMonth(monthAge) {
  let monthLength
  if ((monthAge == 1, 3, 5, 7, 8, 10, 12)) {
    monthLength = 31
  } else if ((monthAge == 4, 6, 9, 11)) {
    monthLength = 30
  } else if (monthAge == 2 && year.value % 4 == 0) {
    monthLength = 29
  } else monthLength = 28
  return monthLength
}

function calculateMonths(month, currentMonth) {
  let monthAge = currentMonth - month.value
  if (monthAge < 0) {
    monthIsNegative = true
    if (dayIsNegative == true) {
      monthAge -= 1
    }
    monthAge += 12
  }
  console.log(monthAge)
  return monthAge
}

function calculateYears(year, currentYear) {
  let yearAge = currentYear - year.value
  if (monthIsNegative == true) {
    yearAge -= 1
  }
  console.log(yearAge)
  return yearAge
}
