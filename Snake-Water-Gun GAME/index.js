/* function gamee() {
    var userscore = 0;
    var compscore = 0;
    for (let i = 8; i > 0; i--) {
        var user = prompt(`----Snake Water Gun GAME----- 
s for Snake  
w for Water 
g for Gun 
You have ${i} chances left`);
        var Randomnumber = Math.floor(Math.random() * 3);
        var comp = ["s", "w", "g"][Randomnumber];
        if (user === comp) {
            console.log(`You entered : ${user}
Computer entered : ${comp}
Result : Tie`);
        } else if (user == "s" && comp == "w") {
            userscore++;
            console.log(`You entered : ${user}
Computer entered : ${comp}
User score :  ${userscore}
Computer score : ${compscore}`);
        } else if (user == "s" && comp == "g") {
            compscore++;
            console.log(`You entered : ${user}
Computer entered : ${comp}
User score :  ${userscore}
Computer score : ${compscore}`);
        } else if (user == "g" && comp == "s") {
            userscore++;
            console.log(`You entered : ${user}
Computer entered : ${comp} 
User score :  ${userscore}
Computer score : ${compscore}`);
        } else if (user == "g" && comp == "w") {
            compscore++;
            console.log(`You entered : ${user} 
Computer entered : ${comp} 
User score :  ${userscore}
Computer score : ${compscore}`);
        } else if (user == "w" && comp == "g") {
            userscore++;
            console.log(`You entered : ${user}
Computer entered : ${comp} 
User score :  ${userscore}
Computer score : ${compscore}`);
        } else if (user == "w" && comp == "s") {
            compscore++;
            console.log(`You entered : ${user} 
Computer entered : ${comp} 
User score :  ${userscore}
Computer score : ${compscore}`);
        }
        console.log(`You have ${i-1} chances left`);
    }
    if (userscore > compscore) {
        console.log("You Won");
    } else if (userscore < compscore) {
        console.log("Comp Won");
    }
}
gamee(); */


function gamee() {
    var btn = document.querySelectorAll("button");
    var user = document.querySelector(".text2");
    var comp = document.querySelector(".text3");
    var result = document.querySelector(".text5");

    btn.forEach((e) => {
        e.addEventListener("click", function(e) {
            var btnclicked = e.currentTarget.innerHTML;
            user.innerHTML = `You Entered : ${btnclicked}`;

            var computervalue = Math.floor(Math.random() * 3);
            var comppentered = ["Snake", "Water", "Gun"][computervalue];
            comp.innerHTML = `Computer Entered : ${comppentered}`;

            if (btnclicked === comppentered) {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : Tie`);
                result.innerHTML = "Tie";
            } else if (btnclicked === "Snake" && comppentered === "Water") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : You Won`);
                result.innerHTML = "You Won";
            } else if (btnclicked === "Snake" && comppentered === "Gun") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : Computer Won`);
                result.innerHTML = "Computer Won";
            } else if (btnclicked === "Water" && comppentered === "Snake") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : Computer Won`);
                result.innerHTML = "Computer Won";
            } else if (btnclicked === "Water" && comppentered === "Gun") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : You Won`);
                result.innerHTML = "You Won";
            } else if (btnclicked === "Gun" && comppentered === "Water") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : Computer Won`);
                result.innerHTML = "Computer Won";
            } else if (btnclicked === "Gun" && comppentered === "Snake") {
                console.log(`You entered : ${btnclicked}
        Computer entered : ${comppentered}
        Result : You Won`);
                result.innerHTML = "You Won";
            }
        })
    })
}

gamee();