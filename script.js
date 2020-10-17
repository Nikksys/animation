let topBande = document.getElementById('top-bande')
let midBande = document.getElementById('mid-bande')
let bottomBande = document.getElementById('bottom-bande')
let buttonWomen = document.getElementsByClassName("women")
let buttonMen = document.getElementsByClassName("men")



function rightSlide() {
  topBande.classList.add("slide-1")  
  midBande.classList.add("slide-2")  
  bottomBande.classList.add("slide-3")
  
  topBande.classList.remove("slide-reverse-1")  
  midBande.classList.remove("slide-reverse-2")  
  bottomBande.classList.remove("slide-reverse-3")
}

function leftSlide() {
  
  
    if (topBande.classList.contains("slide-1")) {
      topBande.classList.add("slide-reverse-1")  
      midBande.classList.add("slide-reverse-2")  
      bottomBande.classList.add("slide-reverse-3")
      
      topBande.classList.remove("slide-1")  
      midBande.classList.remove("slide-2")  
      bottomBande.classList.remove("slide-3") 
    }
  
}

