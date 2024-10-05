function getAboutCards(){
    fetch("./Data/AboutCardsJSON.json")
    .then(response => response.json())
    .then(aboutCards => loadCards(aboutCards.aboutCards))
    .catch(err => console.log("Error :"+err));
}


function loadCards(aboutCards){
    console.log("About Cards Loaded: \n" + aboutCards);

    var divList = document.getElementById("row");
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
        addAboutCard.classList.add("col", "card", "shadow-sm", "d-flex", "flex-row", "align-items-center", "nature-texture-background");
        if(i % 2 == 0){
            addAboutCard.innerHTML = `
                <div class="p-2">
                    <img src="${imageURL}" class="rounded-circle picture-Border" alt="tree">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${heading}</h5>
                    <p class="card-text">${description}</p>
                </div>
            `;
            addAboutCard.style.backgroundPosition = randomBackgroundPosition();
        }else{
            addAboutCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${heading}</h5>
                    <p class="card-text">${description}</p>
                </div>
                <div class="p-2">
                    <img src="${imageURL}" class="rounded-circle  picture-Border" alt="...">
                </div>
            `;
        }

        divList.appendChild(addAboutCard);
    } // end of for
}

console.log("JS Loaded\n\n");
window.onload = getAboutCards;