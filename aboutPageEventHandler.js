function getAboutCards(){
    fetch("./Data/AboutCardsJSON.json")
    .then(response => response.json())
    .then(aboutCards => loadCards(aboutCards.aboutCards))
    .catch(err => console.log("Error :"+err));
}


function loadCards(aboutCards){
    console.log("About Cards Loaded: \n" + aboutCards);

    var divList = document.getElementById("col");
    divList.innerHTML = "";

    for (let i = 0; i < aboutCards.length; i++) {
        let heading = aboutCards[i].heading;
        let description = aboutCards[i].description;
        let imageURL = aboutCards[i].imageURL;
        // construct the HTML element
        let addAboutCard = document.createElement("div");

        // AddCardMovie.addEventListener("click", function (){
        //     document.body.style.backgroundColor = colorAssociation;
        // });
        addAboutCard.classList.add("col"); // Add Bootstrap class to the column
        addAboutCard.innerHTML = `
        <div class="card shadow-sm">
            <img src=${imageURL} class="card-img-top" alt="..."></img>
            <div class="card-body" style="background-color: #228B22">
            <p class="card-text"> <strong>${heading}</strong></br> ${description}</p>
            </div>
        </div>
        `;
        divList.appendChild(addAboutCard);
    } // end of for
}

console.log("JS Loaded\n\n");
window.onload = getAboutCards;