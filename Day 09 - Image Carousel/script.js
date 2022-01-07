const thumbnails = document.getElementById("thumbnails")
const image = document.getElementById("image")
const caption = document.getElementById("caption")
const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")

class Photo {
    constructor(src, author, authorLink, siteName, siteLink) {
        this.src = src
        this.author = author
        this.authorLink = authorLink
        this.siteName = siteName
        this.siteLink = siteLink
    }
}

const pic1 = new Photo("sherman-yang-VBBGigIuaDY-unsplash.jpg", "Sherman Yang", "https://unsplash.com/@emp_creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic2 = new Photo("jakob-owens-EwRM05V0VSI-unsplash.jpg", "Jakob Owens", "https://unsplash.com/@jakobowens1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic3 = new Photo("finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg", "Dan Grinwis", "https://unsplash.com/@finding_dan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic4 = new Photo("vincentiu-solomon-ln5drpv_ImI-unsplash.jpg", "Vincentiu Solomon", "https://unsplash.com/@vincentiu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic5 = new Photo("silas-baisch-Wn4ulyzVoD4-unsplash.jpg", "Silas Baisch", "https://unsplash.com/@silasbaisch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic6 = new Photo("dave-hoefler-okUIdo6NxGo-unsplash.jpg", "Dave Hoefler", "https://unsplash.com/@davehoefler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic7 = new Photo("eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg", "Eugene Golovesov", "https://unsplash.com/@eugene_golovesov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic8 = new Photo("jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg", "Jennifer Reynolds", "https://unsplash.com/@jenreyn0lds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic9 = new Photo("kellen-riggin-SIBOiXKg0Ds-unsplash.jpg", "Kellen Riggin", "https://unsplash.com/@kalaniparker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic10 = new Photo("rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg", "Rafael Hoyos", "https://unsplash.com/@rhweht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")
const pic11 = new Photo("sonya-romanovska-wzdXhyi3AiM-unsplash.jpg", "Sonya Romanovska", "https://unsplash.com/@sonya_romanovska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText")

var pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9]

for (let i = 0; i < pics.length; i++) {
    let pic = pics[i]
    thumbnails.innerHTML += `
        <input type="radio" name="thumbnails" id="${i}">
        <label for="${i}">
            <img class="thumbnail-image" src="images/${pic.src}" alt="Photo by ${pic.author}">
        </label>
    `
}

const radios = document.querySelectorAll("input[name='thumbnails']")

// start from random photo
var currentId = Math.floor(Math.random() * pics.length)
SelectThumbnail(currentId)
UpdatePhoto(pics[currentId])
UpdateCaption(pics[currentId])

leftBtn.addEventListener("click", GoToPreviousImage)
rightBtn.addEventListener("click", GoToNextImage)

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function(e) {SelectPhoto(e)}) 
}

function SelectPhoto(e) {
    let id = e.target.id
    let pic = pics[id]
    currentId = id
    UpdatePhoto(pic)
    UpdateCaption(pic)
}

function GoToPreviousImage()
{
    currentId--
    if (currentId < 0)
    {
        currentId = pics.length - 1
        thumbnails.scrollLeft = thumbnails.offsetWidth
    }
    let pic = pics[currentId]
    SelectThumbnail(currentId)
    UpdatePhoto(pic)
    UpdateCaption(pic)
}

function GoToNextImage()
{
    currentId++
    if (currentId >= pics.length) {
        currentId = 0
        thumbnails.scrollLeft = 0
    }
    let pic = pics[currentId]
    SelectThumbnail(currentId)
    UpdatePhoto(pic)
    UpdateCaption(pic)
}

function SelectThumbnail(id) {
    let currentThumbnail = document.getElementById(id)
    currentThumbnail.checked = true
}

function UpdatePhoto(pic) {
    image.src = `images/${pic.src}`
}

function UpdateCaption(pic) {
    caption.innerHTML = `Photo by <a href="${pic.authorLink}">${pic.author}</a> on <a href="${pic.siteLink}">${pic.siteName}</a>`
}