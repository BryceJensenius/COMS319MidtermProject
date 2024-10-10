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
        let imageAlt = aboutCards[i].alt;
        // construct the HTML element
        let addAboutCard = document.createElement("div");

        // AddCardMovie.addEventListener("click", function (){
        //     document.body.style.backgroundColor = colorAssociation;
        // });
        addAboutCard.classList.add("col", "card", "shadow-sm", "d-flex", "flex-row", "align-items-center", "nature-texture-background");
        addAboutCard.style.backgroundPosition = randomBackgroundPosition(); // random frame of image to avoid repetative look
        if(i % 2 == 0){
            addAboutCard.innerHTML = `
                <div class="p-2">
                    <img src="${imageURL}" class="rounded-circle picture-Border" alt="${imageAlt}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${heading}</h5>
                    <p class="card-text">${description}</p>
                    <button class="leave-review leave-review-right">Leave Review</button>
                    <div class="review-form" style="display: none; margin-top: 10px;">
                        <textarea class="review-text" rows="3" placeholder="Write your review..."></textarea>
                        <button class="submit-review">Submit Review</button>
                        <button class="cancel-review">Cancel</button>
                    </div>
                </div>
            `;
        }else{
            addAboutCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${heading}</h5>
                    <p class="card-text">${description}</p>
                    <button class="leave-review-left leave-review">Leave Review</button>
                    <div class="review-form" style="display: none; margin-top: 10px;">
                        <textarea class="review-text" rows="3" placeholder="Write your review..."></textarea>
                        <button class="submit-review">Submit Review</button>
                        <button class="cancel-review">Cancel</button>
                    </div>
                </div>
                <div class="p-2">
                    <img src="${imageURL}" class="rounded-circle  picture-Border" alt="tree">
                </div>
            `;
        }

        divList.appendChild(addAboutCard);

        // Event listener for when the leave review button is clicked
        const leaveReviewBtn = addAboutCard.querySelector('.leave-review-right') || addAboutCard.querySelector('.leave-review-left'); // Get The Button
        leaveReviewBtn.addEventListener('click', function() {
            leaveReviewBtn.style.display = 'none'; // Hitting leave review makes leave review button no longer visible
            const reviewForm = addAboutCard.querySelector('.review-form'); // Get The Review form for this specific card
            reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none'; // Toggle the review form, enable or disable
        });

        // Event listener for the button that submits this reviwe
        const submitReviewBtn = addAboutCard.querySelector('.submit-review'); // Get the Submit review button from within the form of the card
        if (submitReviewBtn) {
            submitReviewBtn.addEventListener('click', function() {
                leaveReviewBtn.style.display = 'block'; // Now the review button should come back
                const reviewText = addAboutCard.querySelector('.review-text').value; // Get the Text from the review form
                // Reset the Review Form
                addAboutCard.querySelector('.review-text').value = '';
                addAboutCard.querySelector('.review-form').style.display = 'none';

                if(reviewText == ""){
                    alert("Cannot Leave Empty Review!");
                    return;
                }
                console.log('Review submitted:', reviewText); // Log the review

                // Save to a JSON file, I haven't made it here yet
            });
        }
        const cancelReviewButton = addAboutCard.querySelector('.cancel-review');
        cancelReviewButton.addEventListener('click', function() {
            leaveReviewBtn.style.display = 'block';
            addAboutCard.querySelector('.review-form').style.display = 'none';
        });
    }
}

// Creates random background position, works in 0-100% which is why there is * 100 and  adds a % after the number
// Percents work like this: origin, or start, 10% from the left of the image and 20% from the top of the image for example
function randomBackgroundPosition(){
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 100);
    return `${randomX}% ${randomY}%`;
}

// Nav Bar : Only TOggle with smaller screens
const toggleButton = document.getElementById('toggleNav');
const navItems = document.getElementById('navItems');
const headNavigation = document.getElementById('headNavElem');
function handleNavVisibility() {
    if (window.innerWidth > 800) {
        navItems.classList.add('show');  // Always show nav items on larger screens
        headNavigation.classList.add('justify-content-center');
        toggleButton.style.display = 'none'; // Hide the toggle button
    } else {
        navItems.classList.toggle('displayInRows');
        toggleButton.addEventListener('click', () => {
            navItems.classList.toggle('show');
        });
    }
}

handleNavVisibility();

console.log("JS Loaded\n\n");
window.onload = getAboutCards;