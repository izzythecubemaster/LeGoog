function search() {
    let searchString = $("#search-input").val();
    let splitString = searchString.split("");
    let reverseArr = splitString.reverse();
    let messedString = reverseArr.join("");
    $("#search-input").val(messedString);
    $("#search-button").addClass("hidden");
}