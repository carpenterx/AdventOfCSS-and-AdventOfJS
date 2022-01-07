const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const yearText = document.getElementById("year")
const monthText = document.getElementById("month")
const days = document.getElementById("days")
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
const monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
const leapYearDays = 29

var today = new Date()
var year = today.getFullYear()
var month = today.getMonth()

prevBtn.onclick = GoToPreviousMonth
nextBtn.onclick = GoToNextMonth

ShowMonth()

function GoToPreviousMonth() {
    month--
    if (month < 0) {
        month = 11
        year--
    }
    ShowMonth()
}

function GoToNextMonth() {
    month++
    if (month > 11) {
        month = 0
        year++
    }
    ShowMonth()
}

function ShowMonth() {
    var first = new Date(year, month, 1)
    var weekDay = first.getDay()
    var monthDays
    if (month == 1 && IsLeapYear(year))
    {
        monthDays = leapYearDays
    } else {
        monthDays = monthsDays[month]
    }
    
    yearText.innerText = year
    monthText.innerText = months[month]
    FillDays(weekDay, monthDays)
}

function FillDays(weekDay, monthDays) {
    days.innerHTML = ""
    for (let i = 0; i < weekDay; i++) {
        let li = document.createElement("li")
        li.innerText = " "
        days.appendChild(li)
    }
    today = new Date()
    let todayYear = today.getFullYear()
    let todayMonth = today.getMonth()
    var todayDate = today.getDate()
    for (let i = 1; i <= monthDays; i++) {
        let li = document.createElement("li")
        if (todayYear == year && todayMonth == month && todayDate == i) {
            li.classList.add("today")
        }
        li.innerText = i
        days.appendChild(li)
    }
}

function IsLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
}