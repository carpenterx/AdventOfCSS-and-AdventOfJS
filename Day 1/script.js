var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var countdownSeconds = (parseInt(minutes.value) * 60) + parseInt(seconds.value)
var timer = null

function StartTimer()
{
    timer = setInterval(UpdateTimer, 1000)
}

function UpdateTimer()
{
    countdownSeconds--
    let remainingSeconds = countdownSeconds % 60
    minutes.value = FormatTime((countdownSeconds - remainingSeconds) / 60)
    seconds.value = FormatTime(countdownSeconds % 60)
    if (countdownSeconds == 0)
    {
        clearTimeout(timer)
    }
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