window.addEventListener("load", function(){
    document.getElementById("homeText").innerText = randomString()
    console.log(randomColor())
})

document.getElementById("homeText").addEventListener("mousemove", function(){
    document.getElementById("homeText").innerText = randomString()
    // document.getElementById("homeText").style.color = randomColor()
})

function randomString(){
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let word = ""
    for(let i = 0; i < 765; i++){
        word += chars[Math.floor(Math.random() * chars.length)]
    }
    return word
}

function randomColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}