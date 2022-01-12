let modal = document.getElementById('modal');

let btns = document.querySelectorAll('.link--js');

let span = document.getElementsByClassName("close")[0];


btns.forEach(btn => {
  btn.addEventListener('click', () => modal.style.display = "block");
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
