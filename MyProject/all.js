// Contact Modal
let modal = document.getElementById("myModal");
let contactBtn = document.getElementById("contactBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

contactBtn.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Go to Top Button
let topButton = document.getElementById("goToTop");
window.onscroll = function () {
    scrollFunction()
    freeze()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topButton.onclick = () => {
    topFunction();
}

// Freeze Header
let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
function freeze() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}