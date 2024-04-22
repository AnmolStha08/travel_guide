var images = ["../static/images/imgs1.jpg","../static/images/imgs2.jpg", "../static/images/imgs3.jpg", "../static/images/imgs4.jpg", "../static/images/imgs5.jpg", "../static/images/imgs6.jpg", "../static/images/imgs7.jpg"];
var currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("rotating-image").src = images[currentImageIndex];
}

window.onload = function() {
    setInterval(changeImage, 5000); // Change image every 5000ms (5 seconds)
};


function scrollToHome() {
    const homeSection = document.getElementById("Home");
    const offsetTop = homeSection.offsetTop;
    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const distance = offsetTop - startPosition;
    const duration = 1000; // Adjust the duration as needed (in milliseconds)
    let start = null;

    // Animation function
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    // Easing function
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

// Add an event listener to the "Home" link in your navigation
document.getElementById("homeLink").addEventListener("click", scrollToHome);



function scrollToDestination() {
    const destinationSection = document.getElementById("Destination");
    const offsetTop = destinationSection.offsetTop;
    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const distance = offsetTop - startPosition;
    const duration = 1000; // Adjust the duration as needed (in milliseconds)
    let start = null;

    // Animation function
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    // Easing function
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

function scrollToCostCalculation() {
    const destinationSection = document.getElementById("CostCalculation");
    const offsetTop = destinationSection.offsetTop;
    const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const distance = offsetTop - startPosition;
    const duration = 1000; // Adjust the duration as needed (in milliseconds)
    let start = null;

    // Animation function
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    // Easing function
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

// JavaScript code for Cost Calculation
function calculateCost(event) {
    event.preventDefault(); // Prevent form submission
    const budget = parseFloat(document.getElementById('budget').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    // Calculate duration of travel in days
    const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    // Perform cost calculation (example calculation)
    const costPerDay = 100; // Example cost per day
    const totalCost = costPerDay * duration * numberOfPeople;

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Total Cost for ${numberOfPeople} people traveling from ${from} to ${to} for ${duration} days is: $${totalCost}</p>
    `;
}
