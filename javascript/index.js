// javascript to change the image on clicking options button in product page

function change() {
    var p1 = document.getElementById("1");
    var p2 = document.getElementById("2");
    if (p1.style.display == "block") {
        p1.style.display = "none";
        p2.style.display = "block"
    }
    else {
        p1.style.display = "block";
        p2.style.display = "none"
    }
}
document.getElementById("1").style.display = "block";

// below function toggles the images when clicked
function changeWatch() {
    var p3 = document.getElementById("3");
    var p4 = document.getElementById("4");
    if (p3.style.display == "block") {
        p3.style.display = "none";
        p4.style.display = "block"
    }
    else {
        p3.style.display = "block";
        p4.style.display = "none"
    }
}
document.getElementById("3").style.display="block";
function changePower() {
    var p5 = document.getElementById("5");
    var p6 = document.getElementById("6");
    if (p5.style.display == "block") {
        p5.style.display = "none";
        p6.style.display = "block"
    }
    else {
        p5.style.display = "block";
        p6.style.display = "none"
    }
}
document.getElementById("5").style.display="block";
function changeSanitizer() {
    var p7 = document.getElementById("7");
    var p8 = document.getElementById("8");
    if (p7.style.display == "block") {
        p7.style.display = "none";
        p8.style.display = "block"
    }
    else {
        p7.style.display = "block";
        p8.style.display = "none"
    }
}
document.getElementById("7").style.display="block";
function changeSamsung() {
    var p9 = document.getElementById("9");
    var p10 = document.getElementById("10");
    if (p9.style.display == "block") {
        p9.style.display = "none";
        p10.style.display = "block"
    }
    else {
        p9.style.display = "block";
        p10.style.display = "none"
    }
}
function changeMouse() {
    var p11 = document.getElementById("11");
    var p12 = document.getElementById("12");
    if (p11.style.display == "block") {
        p11.style.display = "none";
        p12.style.display = "block"
    }
    else {
        p11.style.display = "block";
        p12.style.display = "none"
    }
}

function changeAdapter() {
    var p13 = document.getElementById("13");
    var p14 = document.getElementById("14");
    if (p13.style.display == "block") {
        p13.style.display = "none";
        p14.style.display = "block"
    }
    else {
        p13.style.display = "block";
        p14.style.display = "none"
    }
}
function changeGrinder() {
    var p15 = document.getElementById("15");
    var p16 = document.getElementById("16");
    if (p15.style.display == "block") {
        p15.style.display = "none";
        p16.style.display = "block"
    }
    else {
        p15.style.display = "block";
        p16.style.display = "none"
    }
}
function changeCooler() {
    var p17 = document.getElementById("17");
    var p18 = document.getElementById("18");
    if (p17.style.display == "block") {
        p17.style.display = "none";
        p18.style.display = "block"
    }
    else {
        p17.style.display = "block";
        p18.style.display = "none"
    }
}
function changeSpeaker() {
    var p19 = document.getElementById("19");
    var p20 = document.getElementById("20");
    if (p19.style.display == "block") {
        p19.style.display = "none";
        p20.style.display = "block"
    }
    else {
        p19.style.display = "block";
        p20.style.display = "none"
    }
}
document.getElementById("9").style.display="block";
document.getElementById("11").style.display="block";
document.getElementById("13").style.display="block";
document.getElementById("15").style.display="block";
document.getElementById("17").style.display="block";
document.getElementById("19").style.display="block";


const overlay = document.getElementById("overlay");

document.querySelector("#cartItems").addEventListener("click", () => {
overlay.style.display = "block";
})

document.querySelector("#closeLogInForm").addEventListener("click", () => {
overlay.style.display = "none";
})

let countEl= document.getElementById("count-el");
console.log("countEl");
let count=0;
//the buy function adds items to the cart on clicking the cart on product description
function buy(){
    if(confirm("Do you want to add an item to the cart?")){
        count+= 1;
countEl.innerText=count;
console.log("count");
    }
    else{
        alert("Item was not added to the cart")
    }
}
//this function clears the items on the cart on clicking clear cart
function save(){
    if(confirm("Are you Sure You want to remove items from Cart")){
        let countstr= count --
    console.log(countstr)
    countEl.textContent=0
    count=0
    alert("Successfully removed items from cart");
    }
    else{
        alert("Removal Cancelled!!!")
    }
 }
//  document.getElementById('flash').innerText('hello"sujeet')