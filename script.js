//fetch all vars
var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;

//get list of all the dog breeds
$.get("https://dog.ceo/api/breeds/list/all", function (data) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="'+breed+ '">'+breed+ '</option>');
    }
});

//dropdown menu has changed so allow submission to it
dropdown.change(function () {
    allowSubmit = true;
});

//handle the click event of the button
$("#getDogImageBtn").click(function (e) {
    e.preventDefault();

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});


$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url, function (data) {
        let imageUrl = data.message;
        $('#breed-image').attr('src',imageUrl);
        
    });

}