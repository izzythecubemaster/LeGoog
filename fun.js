function exposeLegoog() {
    document.title ="Legoog";
}

function about() {
    exposeLegoog();
}

function store() {
    exposeLegoog();
}

function gmail() {
    exposeLegoog();
}

function images() {
    exposeLegoog();
}

function hamburger() {
    exposeLegoog();
}

function signIn() {
    exposeLegoog();
}

function search() {
    let searchString = $("#search-input").val();
    let splitString = searchString.split("");
    let reverseArr = splitString.reverse();
    let messedString = reverseArr.join("");
    $("#search-input").val(messedString);
    $("#search-button").addClass("hidden");

    exposeLegoog();
}

function feelingLucky() {
    if (!$('#html').hasClass("mutating-background")) {
        $('#html').addClass("mutating-background");
    }
    $("#lucky-button").text("I'm not Feeling so Lucky");
    $("#lucky-button").attr("style","color: #D00;");
    exposeLegoog();
}

function advertising() {
    exposeLegoog();
}

function business() {
    exposeLegoog();
}

function privacy() {
    exposeLegoog();
}

function terms() {
    exposeLegoog();
}

function settings() {
    exposeLegoog();
}