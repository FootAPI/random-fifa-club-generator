var club1 = document.getElementById("club1");
var club2 = document.getElementById("club2");

var nameClub1 = document.getElementById("name-club1");
var nameClub2 = document.getElementById("name-club2");

var imageClub1 = document.getElementById("image-club1");
var imageClub2 = document.getElementById("image-club2");

var generateButton = document.getElementById("generate");

var selector = document.getElementById("selector");

generateButton.onclick = () => {
    if (selector.selectedIndex === 0) {
        var url = "https://api.footapi.cf/clubs/random/ligue-1";
    } else if (selector.selectedIndex === 1) {
        var url = "https://api.footapi.cf/clubs/random/premier-league";
    } else if (selector.selectedIndex === 2) {
        var url = "https://api.footapi.cf/clubs/random/la-liga";
    }
    club1.style.display = "block";
    club2.style.display = "block";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var data = data.random;
            nameClub1.innerText = data.name;
            imageClub1.src = data.image;
        });
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var data = data.random;
            nameClub2.innerText = data.name;
            imageClub2.src = data.image;
        });
}
