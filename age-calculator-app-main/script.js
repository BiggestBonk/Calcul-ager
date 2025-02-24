let year = document.querySelector('#year')
let month = document.querySelector('#month')
let day = document.querySelector('#day')

let calculate = document.querySelector('#calculate')
let dayIsNegative = false
let displayDays
let displayMonths
let displayYears
let monthIsNegative = false
let yearDisplay = document.querySelector('.year-result')
let monthDisplay = document.querySelector('.month-result')
let dayDisplay = document.querySelector('.day-result')

const date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth() + 1
let currentDay = date.getDate()

calculate.addEventListener('click', (e) => {
  if (validateDate() == false) return
  if (e.target.matches('#calculate') && year.value != '') {
    displayYears = calculateYears(year, currentYear)
  }
  if (e.target.matches('#calculate') && month.value != '') {
    displayMonths = calculateMonths(month, currentMonth)
  }
  if (e.target.matches('#calculate') && day.value != '') {
    displayDays = calculateDays(day, currentDay)
  }
  addToDisplay(displayYears, displayMonths, displayDays)
  dayIsNegative = false
  monthIsNegative = false
})

function calculateYears(year, currentYear) {
  let yearAge = currentYear - year.value
  if (year.value < 1908 || year.value > 2025) {
    return
  }
  if (monthIsNegative == true) {
    yearAge -= 1
  }
  console.log(yearAge)
  return yearAge
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
function calculateDays(day, currentDay) {
  let dayAge = currentDay - day.value
  if (day.value > 31 || day.value < 1) {
    return console.log('please enter a value between 1 and 31')
  }
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

function addToDisplay(yearAge, monthAge, dayAge) {
  yearDisplay.textContent = `${yearAge} Years`
  monthDisplay.textContent = `${monthAge} Months`
  dayDisplay.textContent = `${dayAge} Days`
}

function validateDate() {
  if ((year.value, month.value, day.value == '')) {
    console.log('one or more fields are empty')
    return false
  } else if ((year.value, month.value, day.value != '')) {
    if (day.value < 0 || day.value > 31) {
      console.log('enter a day between 1-31')
      day.value = ''
      return false
    }
    if (month.value < 0 || month.value > 12) {
      console.log('enter a month between 1-12')
      month.value = ''
      return false
    }
    if (year.value < 1908 || year.value > 2025) {
      console.log('enter a year between 1908-2025')
      year.value = ''
      return false
    }
  } else return true
}
