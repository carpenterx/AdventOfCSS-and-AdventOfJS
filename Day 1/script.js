var greenCircle = document.getElementById("green-circle")
var redCircle = document.getElementById("red-circle")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var startingMinutes = minutes.value
var startingSeconds = seconds.value
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var settingsButton = document.getElementById("settings-button");
var acceptButton = document.getElementById("accept-button");
var timer = null
var editing = false
var countingDown = false
var countdownEnded = false

function StartTimer()
{
    if (!editing)
    {
        if (countdownEnded)
        {
            minutes.value = startingMinutes
            seconds.value = startingSeconds
            ShowGreenCircle()
        }
        else
        {
            timer = setInterval(UpdateTimer, 10)
            countingDown = true
            startButton.classList.add("hide")
            stopButton.classList.remove("hide")
        }
    }
}

function StopTimer()
{
    clearTimeout(timer)
    countingDown = false
    startButton.classList.remove("hide")
    stopButton.classList.add("hide")
}

function EditTimer()
{
    if (!countingDown)
    {
        editing = true
        settingsButton.classList.add("hide")
        acceptButton.classList.remove("hide")
        minutes.disabled = false
        seconds.disabled = false
    }
}

function AcceptChanges()
{
    editing = false
    settingsButton.classList.remove("hide")
    acceptButton.classList.add("hide")
    minutes.disabled = true
    seconds.disabled = true
    startingMinutes = minutes.value
    startingSeconds = seconds.value
    ClearSelection()
}

function ClearSelection()
{
    if (window.getSelection) {
        if (window.getSelection().empty) {  // Chrome
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {  // Firefox
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection) {  // IE?
        document.selection.empty();
      }
}

function CheckInput(element)
{
    let value = parseInt(element.value)
    if (Number.isNaN(value) || value < 0)
    {
        element.value = FormatTime(0)
    }
    else if (value > 60)
    {
        element.value = FormatTime(60)
    }
    else
    {
        element.value = FormatTime(value)
    }
}

function UpdateTimer()
{
    let countdownSeconds = (parseInt(minutes.value) * 60) + parseInt(seconds.value)
    countdownSeconds--
    if (countdownSeconds >= 0)
    {
        let remainingSeconds = countdownSeconds % 60
        minutes.value = FormatTime((countdownSeconds - remainingSeconds) / 60)
        seconds.value = FormatTime(countdownSeconds % 60)
        if (countdownSeconds == 0)
        {
            StopTimer()
            ShowRedCircle()
        }
    }
}

function ShowRedCircle()
{
    greenCircle.classList.add("hide");
    redCircle.classList.remove("hide")
    countdownEnded = true
    alert("Pomodoro finished!");
}

function ShowGreenCircle()
{
    countdownEnded = false
    greenCircle.classList.remove("hide");
    redCircle.classList.add("hide")
}

function FormatTime(time)
{
    if (time < 10)
    {
        return "0" + time
    }
    else
    {
        return time
    }
}