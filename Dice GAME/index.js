//random Image 1
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomimgsrc1 = "dice" + randomnumber1 + ".png";
var randomimg1 = document.getElementById("img1");
randomimg1.setAttribute("src", randomimgsrc1);

//random Image 2
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimgsrc2 = "dice" + randomnumber2 + ".png";
var randomimg2 = document.getElementById("img2");
randomimg2.setAttribute("src", randomimgsrc2);

//result
var result = document.getElementById("text2");
if (randomnumber1 > randomnumber2) {
    result.innerHTML = "🥳PLAYER ONE WINS🥳";
} else if (randomnumber1 < randomnumber2) {
    result.innerHTML = "🥳PLAYER TWO WINS🥳";
}
console.log(result);