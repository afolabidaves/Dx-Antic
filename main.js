
// basic es 5 function declaration
// function name(){}
var myname = "David"

function popsomething(){
    alert(myname+ "  I have been coding since 12")
    
}

// cosole.jog(myname)

// console.log(Document)

var ourbody = document.querySelector(".ourpagebody")

// ourbody.style.background = "black"

var hamburger = document.querySelector(".hamburger-container")
// console.log(hamburger)

var mobilelinkscontainer = document.querySelector('.mobile-links-container')

function addandremove(){
    hamburger.classList.toggle("showburger")
    mobilelinkscontainer.classList.toggle('showmobilelink')
}