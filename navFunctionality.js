// Nav Bar : Only TOggle with smaller screens
const toggleButton = document.getElementById('toggleNav');
const navItems = document.getElementById('navItems');
const headNavigation = document.getElementById('headNavElem');
const header = document.getElementById('heading');
let headingToggleState = false;

function handleNavVisibility() {
    if (window.innerWidth > 800) {
        navItems.classList.add('show');  // Always show nav items on larger screens
        headNavigation.classList.add('justify-content-center');
        toggleButton.style.display = 'none'; // Hide the toggle button
        header.style.padding = '15px 0';
        header.style.marginBottom = '15px';
    } else {
        navItems.classList.toggle('displayInRows');
        toggleButton.addEventListener('click', () => {

            if(headingToggleState){ // Toggled go untoggle and make smaller
                navItems.classList.toggle('show');
                header.style.padding = '3px 10px';
                header.style.marginBottom = '3px';
                headingToggleState = false;
            }else{
                navItems.classList.toggle('show');
                header.style.padding = '15px 10px';
                header.style.marginBottom = '15px';
                headingToggleState = true;
            }
        });
    }
}

handleNavVisibility();

console.log("JS Loaded\n\n");
window.onload = getAboutCards;