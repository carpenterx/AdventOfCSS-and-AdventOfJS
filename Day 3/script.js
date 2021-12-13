const key1 = document.getElementById("key-1")
const key2 = document.getElementById("key-2")
const key3 = document.getElementById("key-3")
const key4 = document.getElementById("key-4")
const key5 = document.getElementById("key-5")
const key6 = document.getElementById("key-6")
const key7 = document.getElementById("key-7")
const key8 = document.getElementById("key-8")
const key9 = document.getElementById("key-9")
const key10 = document.getElementById("key-10")
const key11 = document.getElementById("key-11")
const key12 = document.getElementById("key-12")
const key13 = document.getElementById("key-13")
const key14 = document.getElementById("key-14")
const key15 = document.getElementById("key-15")
const key16 = document.getElementById("key-16")
const key17 = document.getElementById("key-17")
const key18 = document.getElementById("key-18")
const key19 = document.getElementById("key-19")
const key20 = document.getElementById("key-20")
const key21 = document.getElementById("key-21")
const key22 = document.getElementById("key-22")
const key23 = document.getElementById("key-23")

key1.onclick = function() { PlaySound("audio/key-1.mp3") }
key2.onclick = function() { PlaySound("audio/key-2.mp3") }
key3.onclick = function() { PlaySound("audio/key-3.mp3") }
key4.onclick = function() { PlaySound("audio/key-4.mp3") }
key5.onclick = function() { PlaySound("audio/key-5.mp3") }
key6.onclick = function() { PlaySound("audio/key-6.mp3") }
key7.onclick = function() { PlaySound("audio/key-7.mp3") }
key8.onclick = function() { PlaySound("audio/key-8.mp3") }
key9.onclick = function() { PlaySound("audio/key-9.mp3") }
key10.onclick = function() { PlaySound("audio/key-10.mp3") }
key11.onclick = function() { PlaySound("audio/key-11.mp3") }
key12.onclick = function() { PlaySound("audio/key-12.mp3") }
key13.onclick = function() { PlaySound("audio/key-13.mp3") }
key14.onclick = function() { PlaySound("audio/key-14.mp3") }
key15.onclick = function() { PlaySound("audio/key-15.mp3") }
key16.onclick = function() { PlaySound("audio/key-16.mp3") }
key17.onclick = function() { PlaySound("audio/key-17.mp3") }
key18.onclick = function() { PlaySound("audio/key-18.mp3") }
key19.onclick = function() { PlaySound("audio/key-19.mp3") }
key20.onclick = function() { PlaySound("audio/key-20.mp3") }
key21.onclick = function() { PlaySound("audio/key-21.mp3") }
key22.onclick = function() { PlaySound("audio/key-22.mp3") }
key23.onclick = function() { PlaySound("audio/key-23.mp3") }

function PlaySound(soundPath)
{
    let audio = new Audio(soundPath)
    audio.play()
}