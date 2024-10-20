function loadCarousel() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const carouselItemsContainer = document.getElementById('carouselItems');
            carouselItemsContainer.innerHTML = ''; // Clear any existing items

            data.slideCards.forEach((slideCards, index) => {
                const isActive = index === 0 ? 'active' : ''; // Set the first item as active
                const carouselItem = `
                    <div class="carousel-item ${isActive}">
                        <img src="${slideCards.imageURL}" class="d-block w-100" alt="${slideCards.alt}">
                        <div class="carousel-caption">
                            <h5>${slideCards.heading}</h5>
                            <p>${slideCards.description}</p>
                        </div>
                    </div>
                `;
                carouselItemsContainer.innerHTML += carouselItem; // Add the new item to the carousel
            });
        })
        .catch(err => console.log('Error:', err));
        // Initialize the carousel
        const carouselElement = new bootstrap.Carousel(document.getElementById('carouselExample'));
}

// Call the function to load the carousel
window.onload = loadCarousel;
