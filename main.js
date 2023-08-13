let modal = document.getElementById("myModal");
let btn = document.getElementById("moreBtn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function holas(){
    let cora = document.getElementById("heart")
    cora.style.color = '#ff0000';
}