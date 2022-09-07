const btn = document.getElementById("btn_generate")
const img = document.getElementById("img")
const title = document.getElementById("title")
const future = document.getElementById("future")
var cur
futures = [
  "You are alone in the dark. don't stop waiting, the right moment will appear",
  "Inside The madness there is a light of sanity. be sure you won't miss it",
  "You have faced the good face of nature recently. have you seen it?",
  "Something in your memories is following you, not letting you get over. will you let it go?",
  "Your mind is occupied by too much noise. give it some rest - you absolutly deserve it.",
]
titles = ["The Princess", "The Prophet", "The Goddes", "The Child", "The Ocean"]

update()
btn.addEventListener("click", () => {
  update()
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getImage(index) {
  return "images/" + index + ".png"
}

function update() {
  let previous = cur
  while (cur == previous) {
    cur = getRndInteger(0, 5)
  }
  img.src = getImage(cur)
  title.innerHTML = titles[cur]
  future.innerHTML = futures[cur]
  console.log(cur)
}
