window.onload = function () {
    full_height_div();
    getYear();
};


function full_height_div() {
    var window_height = window.innerHeight;
    var div = document.getElementsByClassName("div_full_height");
    for (var i = 0; i < div.length; i++) {
        div[i].style.height = window_height + "px";
    }
}


// Smooth Scroll
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 400);
                return false;
            }
        }
    });
});


// Quote Button CSS Change
function quoteBtnHover() {
    var btnBg = document.getElementById("quoteBtn");
    var btnTxt = document.getElementById("quoteBtnH3");
    btnBg.style.backgroundColor = "#004e92";
    btnBg.style.cursor = "pointer";
    btnTxt.style.color = "white";
    btnTxt.style.cursor = "pointer";

}
function quoteBtnOut()  {
    var btnBg = document.getElementById("quoteBtn");
    var btnTxt = document.getElementById("quoteBtnH3");
    btnBg.style.backgroundColor = "white";
    btnTxt.style.color = "rgb(60, 133, 196)";
}

// Return current year
function getYear() {
    var currentDate = new Date();
    document.getElementById("currentYear").innerHTML = String(currentDate.getFullYear());
}