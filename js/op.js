var input = 1
var prevInput = ""

document.getElementById("speak").addEventListener("click", function(){
    // const message = new SpeechSynthesisUtterance();
    // message.text = document.getElementById("output").value;

    // const speechSynthesis = window.speechSynthesis;
    
    // speechSynthesis.speak(message);
    
    var audio = new Audio("../The Missile Knows Where It Is....mp3")
    audio.play()
})

document.getElementById("translate").addEventListener("click", function(){
    inText = document.getElementById("input").value

    outText = ""

    if(input == 1)
    {
        for(var i = 0; i < inText.length; i++)
        {
            if("aeiou".includes(inText[i]))
            {
                outText += inText[i]
                outText += "  "
            }
            else if (" " == inText[i] && "aeioubcdfghjklmnpqrstvwxyz".includes(inText[i - 1]))
            {
                outText += "po"
                outText += "  "
            }
            else if("bcdfghjklmnpqrstvwxyz".includes(inText[i].toLowerCase()))
            {
                outText += inText[i] + "op"
                outText += "  "
            } 
            else 
            {
                if(inText[i]!=" ")
                {
                    outText += inText[i]
                    outText += "  "
                }
            }

        }

        outText = outText.trim()

    }
    else
    {
        inText = inText.split(" ")
        for(var i = 0; i < inText.length; i++)
        {
            if(inText[i].includes("op"))
            {
                outText += inText[i][0]
            }
            else if(inText[i] == "po")
            {
                outText += " "
            }
            else
            {
                outText += inText[i]
            }
        }
    }
    document.getElementById("output").value = outText

})

document.getElementById("swap").addEventListener("click", function(){
    input *= -1
    if(input == 1)
    {
        document.getElementById("inputLang").innerHTML = "English"
        document.getElementById("outputLang").innerHTML = "Op"
    }
    else
    {
        document.getElementById("inputLang").innerHTML = "Op"
        document.getElementById("outputLang").innerHTML = "English"
    }
    inText = document.getElementById("input").value
    document.getElementById("input").value = document.getElementById("output").value
    document.getElementById("output").value = inText
})

document.getElementById("input").addEventListener("keyup", function(){
    document.getElementById("output").value = ""
})