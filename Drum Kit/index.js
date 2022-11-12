let drum = document.querySelectorAll("button");
for (var i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function() {
        var btninnerHTML = this.innerHTML;
        makesound(btninnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    hovereffect(event.key);
});

function makesound(key) {
    if (key === "W" || key === "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    } else if (key === "a" || key === "A") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    } else if (key === "s" || key === "S") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    } else if (key === "d" || key === "D") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    } else if (key === "j" || key === "J") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    } else if (key === "k" || key === "K") {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    } else if (key === "l" || key === "L") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    } else {
        alert("Press a Valid Key.")
    }
}

function hovereffect(currentbtn) {
    var btn = document.querySelector("." + currentbtn.toUpperCase());
    btn.classList.add("hoverr");
    setTimeout(function() {
        btn.classList.remove("hoverr");
    }, 200)
}
